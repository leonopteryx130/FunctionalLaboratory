import React, { useState, useRef } from "react";

import CommonBackToHome from "@/components/CommonBackToHome";
import { randomSplit, rgb2hex, randomTF } from "@/utils/commonUtils";

import style from './index.scss'

const ColorSentivityTest = () => {

  const [round, setRound] = useState(0)
  const baseColor = useRef([0, 0, 0])

  const diffPosition = useRef(null)
  const diffRGB = useRef([0, 0, 0])

  const calAllRandom = () => {
    // 计算所有的随机值
    baseColor.current = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256)
    ]

    // 随机指定一个位置作为不同的颜色
    const diffColorNumber = randomSplit(6 * (10 - round), 3, 20) // 一个颜色变化范围
    diffPosition.current = Math.floor(Math.random() * 16) // 0-15的随机位置

    // 一个随机颜色变化范围，-diffColorNumber到diffColorNumber之间
    diffRGB.current = [
      Math.max(0, Math.min(255, baseColor.current[0] + (randomTF() ? 1 : -1) * diffColorNumber[0])),
      Math.max(0, Math.min(255, baseColor.current[1] + (randomTF() ? 1 : -1) * diffColorNumber[1])),
      Math.max(0, Math.min(255, baseColor.current[2] + (randomTF() ? 1 : -1) * diffColorNumber[2]))
    ]
  }

  const handleBegain = () => {
    // 点击开始游戏，重新计算所有随机值，并把round设置为1 

    // 随机生成一个颜色，作为基础色
    calAllRandom()
    setRound(1)
  }

  const handleNextRound = () => {
    calAllRandom()
    setRound(round + 1)
  }

  const handleEnd = () => {
    // 游戏结束，初始化所有数据
    baseColor.current = [0, 0, 0]
    diffPosition.current = null
    diffRGB.current = [0, 0, 0]
    setRound(0)
  }

  const progressPercent = Math.min(100, Math.max(0, (round / 10) * 100))

  return (
    <div className={style.container}>
      <CommonBackToHome />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className={style.gameCard}>
          <div className={`${style.title} ${style.glow}`}>颜色敏感度测试</div>
          {
            round > 0 && (
              <div className={style.hud}>
                <div className={style.pagesText}>第 {round}/10 轮</div>
                <div className={style.progressBar}>
                  <div className={style.progressTrack}>
                    <div className={style.progressFill} style={{ width: `${progressPercent}%` }} />
                  </div>
                  <div className={style.progressLabel}>{Math.round(progressPercent)}%</div>
                </div>
              </div>
            )
          }
          <div className={style.subtitle}>{round > 0 ? '找出那一块颜色不同的方块' : '点击开始按钮进入挑战'}</div>
          {
            round > 0 ? (
              <div className={`${style.rectsContainer} ${style.gridPop}`}>
                {
                  // 生成 16 个 div
                  Array.from(Array(16)).map((_, index) => {
                    return (
                      <div key={index} className={style.rect} style={{
                        // 根据 index 和 diffPosition 的值，判断是否是不同的颜色
                        backgroundColor: index === diffPosition.current ?
                          rgb2hex(diffRGB.current[0], diffRGB.current[1], diffRGB.current[2]) :
                          rgb2hex(baseColor.current[0], baseColor.current[1], baseColor.current[2])
                      }}
                        onClick={() => {
                          if (round === 10) {
                            handleEnd()
                          }
                          if (index === diffPosition.current) {
                            handleNextRound()
                          } else {
                            handleEnd()
                          }
                        }}
                      >
                      </div>
                    )
                  })
                }
              </div>
            ) : (
              <div className={`${style.begainButton} ${style.ctaPulse}`} onClick={handleBegain}>点击开始</div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ColorSentivityTest;