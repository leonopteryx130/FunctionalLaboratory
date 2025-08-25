import React, { useState, useEffect } from "react";
import Key from "./Key";
import { KEYBOARD_LAYOUT } from "../config";

import Style from "./keyBoard.scss";

const KeyBoard = ({ enableKeyboard = false }) => {
  // 状态管理按键按下状态
  const [pressedKeys, setPressedKeys] = useState(new Set());

  // 键盘事件处理
  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKeyDown = (event) => {
      setPressedKeys(prev => new Set([...prev, event.code]));
    };

    const handleKeyUp = (event) => {
      setPressedKeys(prev => {
        const newSet = new Set(prev);
        newSet.delete(event.code);
        return newSet;
      });
    };

    // 添加事件监听器
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // 清理事件监听器
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [enableKeyboard]);

  return (
    <div className={Style.keyboardContainer}>
      <div className={Style.keyboardMain}>
        {/* 主键盘区域 */}
        {KEYBOARD_LAYOUT.map((row, rowIndex) => (
          <div key={rowIndex} className={Style.keyboardRow}>
            {row.map((key, keyIndex) => (
              <Key
                key={`${rowIndex}-${keyIndex}`}
                label={key.label}
                width={key.width}
                height={key.height}
                keyBackground="#1e3a5f"
                textColor="#ffffff"
                glowColor="#87ceeb"
                backgroundOpacity={0.9}
                isPressed={pressedKeys.has(key.keyCode)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyBoard;
