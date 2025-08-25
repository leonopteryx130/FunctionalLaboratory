import React, { useState, useEffect, useMemo } from "react";
import Key from "./Key";
import Style from "./keyBoard.scss";
import { KEYBOARD_LAYOUT, KEYBOARD_KEY_STYLE } from "../config";

const KeyBoard = ({ enableKeyboard = false }) => {
  // 状态管理按键按下状态
  const [pressedKeys, setPressedKeys] = useState(new Set());

  // 预计算当前虚拟键盘所处理的按键集合，以便只拦截这些按键
  const handledKeyCodes = useMemo(() => {
    const codes = new Set();
    KEYBOARD_LAYOUT.forEach(row => {
      row.forEach(key => {
        if (key.keyCode) {
          codes.add(key.keyCode);
        }
      });
    });
    return codes;
  }, []);

  // 键盘事件处理
  useEffect(() => {
    if (!enableKeyboard) return;

    const preventEventIfHandled = (event) => {
      // 仅对虚拟键盘支持的按键进行拦截，避免影响其他快捷键
      if (handledKeyCodes.has(event.code)) {
        // 阻止页面滚动、输入框输入、浏览器默认行为等
        event.preventDefault();
        // 阻止事件继续向上冒泡，避免影响页面其他监听器
        event.stopPropagation();
        return true;
      }
      return false;
    };

    const handleKeyDown = (event) => {
      if (preventEventIfHandled(event)) {
        setPressedKeys(prev => new Set([...prev, event.code]));
      }
    };

    const handleKeyUp = (event) => {
      if (!preventEventIfHandled(event)) return;
      setPressedKeys(prev => {
        const newSet = new Set(prev);
        newSet.delete(event.code);
        return newSet;
      });
    };

    // 使用捕获阶段监听，进一步确保能先于其他监听器处理
    const options = { capture: true };
    document.addEventListener('keydown', handleKeyDown, options);
    document.addEventListener('keyup', handleKeyUp, options);

    // 清理事件监听器
    return () => {
      document.removeEventListener('keydown', handleKeyDown, options);
      document.removeEventListener('keyup', handleKeyUp, options);
    };
  }, [enableKeyboard, handledKeyCodes]);

  // 添加console.log来测试热更新
  console.log("KeyBoard component rendered with layout:", KEYBOARD_LAYOUT.length, "rows");

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
                keyBackground={KEYBOARD_KEY_STYLE.keyBackground}
                textColor={KEYBOARD_KEY_STYLE.textColor}
                glowColor={KEYBOARD_KEY_STYLE.glowColor}
                backgroundOpacity={KEYBOARD_KEY_STYLE.backgroundOpacity}
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
