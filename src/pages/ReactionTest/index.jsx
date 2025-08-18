import React, { useState, useEffect, useRef } from "react";

import CommonBackToHome from "@/components/CommonBackToHome";
import style from './index.scss';

const Status = {
  UN_BEGAIN: 0, // 未开始阶段
  WAIT_TO_CLICK: 1, // 随机倒计时，等待点击阶段
  CLICK_TO_TEST: 2, // 点击测试阶段
}

const MAX_HISTORY = 5;

const ReactionTest = () => {

  const [isMouseHover, setIsMouseHover] = useState(false);
  const [testStatus, setTestStatus] = useState(Status.UN_BEGAIN); // 测试状态
  const [reactionTime, setReactionTime] = useState(null); // 反应时间
  const [message, setMessage] = useState(''); // 状态提示
  const [tooSoon, setTooSoon] = useState(false); // 过早点击反馈
  const [historyTimes, setHistoryTimes] = useState(() => {
    try {
      const saved = localStorage.getItem('reaction_history');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [bestTime, setBestTime] = useState(() => {
    try {
      const saved = localStorage.getItem('reaction_best');
      return saved ? Number(saved) : null;
    } catch { return null; }
  });
  const [ripple, setRipple] = useState(false); // 点击涟漪

  const timerStart = useRef(null);
  const waitTimerRef = useRef(null);
  const audioCtxRef = useRef(null);

  useEffect(() => {
    if (testStatus === Status.WAIT_TO_CLICK) {
      const randomTime = Math.floor((Math.random() * 4 + 1) * 1000);
      setMessage('准备...不要提前点');
      if (waitTimerRef.current) {
        clearTimeout(waitTimerRef.current);
      }
      // 等待点击阶段，随机倒计时1-5s
      waitTimerRef.current = setTimeout(() => {
        setTestStatus(Status.CLICK_TO_TEST);
      }, randomTime);
    } else if (testStatus === Status.CLICK_TO_TEST) {
      // 点击测试阶段，记录点击时间
      timerStart.current = new Date().getTime(); // 记录点击时间
      setMessage('现在！点击圆圈');
      // 轻微提示音
      try {
        if (!audioCtxRef.current) {
          audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        const ctx = audioCtxRef.current;
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'triangle';
        o.frequency.value = 880;
        g.gain.value = 0.05;
        o.connect(g);
        g.connect(ctx.destination);
        o.start();
        setTimeout(() => { o.stop(); o.disconnect(); g.disconnect(); }, 120);
      } catch {}
    }
    return () => {
      // 清理等待定时器，避免泄漏
      if (waitTimerRef.current && (testStatus !== Status.WAIT_TO_CLICK)) {
        clearTimeout(waitTimerRef.current);
        waitTimerRef.current = null;
      }
    }
  }, [testStatus])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        if (testStatus === Status.UN_BEGAIN) {
          startTest();
        } else if (testStatus === Status.CLICK_TO_TEST) {
          finishTest();
        } else if (testStatus === Status.WAIT_TO_CLICK) {
          handleTooSoon();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [testStatus]);

  const persistStats = (times, best) => {
    try {
      localStorage.setItem('reaction_history', JSON.stringify(times));
      if (best !== undefined && best !== null) {
        localStorage.setItem('reaction_best', String(best));
      }
    } catch {}
  };

  const startTest = () => {
    timerStart.current = null; // 重置点击时间
    setReactionTime(null); // 重置反应时间
    setTooSoon(false);
    setRipple(false);
    setMessage('准备...不要提前点');
    setTestStatus(Status.WAIT_TO_CLICK);
  };

  const handleTooSoon = () => {
    if (waitTimerRef.current) {
      clearTimeout(waitTimerRef.current);
      waitTimerRef.current = null;
    }
    setTooSoon(true);
    setMessage('太快了！等颜色变成橙色再点');
    setTestStatus(Status.UN_BEGAIN);
    setTimeout(() => setTooSoon(false), 600);
  };

  const finishTest = () => {
    const time = new Date().getTime() - timerStart.current; // 计算反应时间
    setReactionTime(time); // 设置反应时间
    setTestStatus(Status.UN_BEGAIN);
    setRipple(true);
    setMessage(time <= 150 ? '闪电手！' : time <= 250 ? '很快！' : '再试一次，能更快~');

    const newHistory = [time, ...historyTimes].slice(0, MAX_HISTORY);
    const newBest = bestTime === null ? time : Math.min(bestTime, time);
    setHistoryTimes(newHistory);
    setBestTime(newBest);
    persistStats(newHistory, newBest);
    setTimeout(() => setRipple(false), 400);
  };

  return (
    <div className={style.Container}>
      <CommonBackToHome />
      <div 
        className={[
          style.RoundButton,
          testStatus === Status.CLICK_TO_TEST ? style.Ready : '',
          testStatus === Status.WAIT_TO_CLICK ? style.Waiting : '',
          tooSoon ? style.TooSoon : '',
        ].filter(Boolean).join(' ')} style={{
          backgroundColor: testStatus === Status.CLICK_TO_TEST? '#F48E09': '#8E8E8E', // 点击测试阶段变为橙色
          cursor: testStatus === Status.CLICK_TO_TEST ? 'pointer' : 'default', // 点击测试阶段变为手型
        }}
        onClick={() => {
          if (testStatus === Status.WAIT_TO_CLICK) {
            handleTooSoon();
            return;
          }
          if (testStatus !== Status.CLICK_TO_TEST ) {
            return
          }
          finishTest();
        }}
      >
        {ripple && <div className={style.Ripple} />}
        <div className={style.ReactionTimeText}>{
          testStatus === Status.CLICK_TO_TEST ? '点击!' : (reactionTime ? `${reactionTime}ms` : '')
        }</div>
      </div>
      <div 
        className={style.Button}
        style={{
            // 未开始阶段为灰色，鼠标悬浮时为浅蓝色，点击后变为等待点击阶段，按钮显示红色，且不可点击
            backgroundColor: testStatus !== Status.UN_BEGAIN? '#F17171': isMouseHover ? '#A4DFFA' : '#CCCFD0',
            cursor: testStatus === Status.UN_BEGAIN ? 'pointer': 'not-allowed',
        }}
        onMouseEnter={() => {
          setIsMouseHover(true);
        }}
        onMouseLeave={() => {
          setIsMouseHover(false);
        }}
        onClick={() => {
          if (testStatus !== Status.UN_BEGAIN) {
            return
          }
          startTest();
        }}
      >{
        testStatus === Status.UN_BEGAIN ? '开始' : '测试进行中'
      }</div>

      <div className={style.HUD}>
        <div className={style.Message}>{message || '按空格/回车也可操作'}</div>
        <div className={style.Stats}> 
          <div className={style.Best}>最佳：{bestTime ? `${bestTime}ms` : '--'}</div>
          <div className={style.History}>最近：{
            historyTimes.length ? historyTimes.map((t, idx) => (
              <span key={idx} className={style.Tag}>{t}ms</span>
            )) : '--'
          }</div>
        </div>
      </div>

      <div className={style.DescriptionText}>
        点击开始后，圆圈会在1-5s内变为橙色，请在颜色发生变化时，尽可能快速的点击圆圈
      </div>
    </div>
  );
}

export default ReactionTest;