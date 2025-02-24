import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import style from './index.scss';
import BackIcon from '@/assets/icons/back.svg';
import { px2rem } from "../../utils/commonUtils";

const Status = {
    UN_BEGAIN: 0, // 未开始阶段
    WAIT_TO_CLICK: 1, // 随机倒计时，等待点击阶段
    CLICK_TO_TEST: 2, // 点击测试阶段
}

const ReactionTest = () => {

  const navigate = useNavigate();

  const [isMouseHover, setIsMouseHover] = useState(false);
  const [testStatus, setTestStatus] = useState(Status.UN_BEGAIN); // 测试状态
  const [reactionTime, setReactionTime] = useState(null); // 反应时间
  const timerStart = useRef(null);

  useEffect(() => {
    if (testStatus === Status.WAIT_TO_CLICK) {
      const randomTime = Math.floor((Math.random() * 4 + 1) * 1000);
      console.log('randomTime', randomTime);
      // 等待点击阶段，随机倒计时1-5s
      setTimeout(() => {
        setTestStatus(Status.CLICK_TO_TEST);
      }, randomTime);
    }else if (testStatus === Status.CLICK_TO_TEST) {
        // 点击测试阶段，记录点击时间
        timerStart.current = new Date().getTime(); // 记录点击时间
    }
  }, [testStatus])

  return (
    <div className={style.Container}>
      <div 
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: "100%",
            marginLeft: px2rem(80),
            marginTop: px2rem(40),
            marginBottom: px2rem(150),
        }}
        onClick={() => {
            navigate('/');
        }}
      >
        <BackIcon width={px2rem(32)} height={px2rem(32)}/>
        <div className={style.BackText}>Back To Home</div>
      </div>
      <div 
        className={style.RoundButton} style={{
          backgroundColor: testStatus === Status.CLICK_TO_TEST? '#F48E09': '#8E8E8E', // 点击测试阶段变为橙色
          cursor: testStatus === Status.CLICK_TO_TEST ? 'pointer' : 'default', // 点击测试阶段变为手型
        }}
        onClick={() => {
          if (testStatus !== Status.CLICK_TO_TEST ) {
            return
          }
          const time = new Date().getTime() - timerStart.current; // 计算反应时间
          setReactionTime(time); // 设置反应时间
          setTestStatus(Status.UN_BEGAIN);
        }}
      >
        <div className={style.ReactionTimeText}>{reactionTime && `${reactionTime}ms`}</div>
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
          timerStart.current = null; // 重置点击时间
          setReactionTime(null); // 重置反应时间
          setTestStatus(Status.WAIT_TO_CLICK);
        }}
      >{
        testStatus === Status.UN_BEGAIN ? '开始' : '测试进行中'
      }</div>
      <div className={style.DescriptionText}>
        点击开始后，圆圈会在1-5s内变为橙色，请在颜色发生变化时，尽可能快速的点击圆圈
      </div>
    </div>
  );
}

export default ReactionTest;