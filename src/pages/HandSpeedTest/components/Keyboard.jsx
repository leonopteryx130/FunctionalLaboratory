import React from "react";
import Key from "./Key";
import Style from "./keyBoard.scss";

const KeyBoard = () => {
  // 定义84键键盘布局数据 - 调整按键尺寸
  const keyboardLayout = [
    // 测试热更新 - 修改这里的标签
    // 第一行 - 数字键
    // 第一行 - 数字键
    [
      { label: "`", width: 35, height: 30 },
      { label: "1", width: 35, height: 30 },
      { label: "2", width: 35, height: 30 },
      { label: "3", width: 35, height: 30 },
      { label: "4", width: 35, height: 30 },
      { label: "5", width: 35, height: 30 },
      { label: "6", width: 35, height: 30 },
      { label: "7", width: 35, height: 30 },
      { label: "8", width: 35, height: 30 },
      { label: "9", width: 35, height: 30 },
      { label: "0", width: 35, height: 30 },
      { label: "-", width: 35, height: 30 },
      { label: "=", width: 35, height: 30 },
      { label: "Backspace", width: 70, height: 30 },
    ],
    // 第二行 - QWERTY
    [
      { label: "Tab", width: 55, height: 30 },
      { label: "Q", width: 35, height: 30 },
      { label: "W", width: 35, height: 30 },
      { label: "E", width: 35, height: 30 },
      { label: "R", width: 35, height: 30 },
      { label: "T", width: 35, height: 30 },
      { label: "Y", width: 35, height: 30 },
      { label: "U", width: 35, height: 30 },
      { label: "I", width: 35, height: 30 },
      { label: "O", width: 35, height: 30 },
      { label: "P", width: 35, height: 30 },
      { label: "[", width: 35, height: 30 },
      { label: "]", width: 35, height: 30 },
      { label: "\\", width: 50, height: 30 },
    ],
    // 第三行 - ASDF
    [
      { label: "Caps", width: 80, height: 30 },
      { label: "A", width: 35, height: 30 },
      { label: "S", width: 35, height: 30 },
      { label: "D", width: 35, height: 30 },
      { label: "F", width: 35, height: 30 },
      { label: "G", width: 35, height: 30 },
      { label: "H", width: 35, height: 30 },
      { label: "J", width: 35, height: 30 },
      { label: "K", width: 35, height: 30 },
      { label: "L", width: 35, height: 30 },
      { label: ";", width: 35, height: 30 },
      { label: "'", width: 35, height: 30 },
      { label: "Enter", width: 85, height: 30 },
    ],
    // 第四行 - ZXCV
    [
      { label: "Shift", width: 100, height: 30 },
      { label: "Z", width: 35, height: 30 },
      { label: "X", width: 35, height: 30 },
      { label: "C", width: 35, height: 30 },
      { label: "V", width: 35, height: 30 },
      { label: "B", width: 35, height: 30 },
      { label: "N", width: 35, height: 30 },
      { label: "M", width: 35, height: 30 },
      { label: ",", width: 35, height: 30 },
      { label: ".", width: 35, height: 30 },
      { label: "/", width: 35, height: 30 },
      { label: "Shift", width: 100, height: 30 },
    ],
    // 第五行 - 控制键
    [
      { label: "Ctrl", width: 55, height: 30 },
      { label: "Win", width: 55, height: 30 },
      { label: "Alt", width: 55, height: 30 },
      { label: "Space", width: 220, height: 30 },
      { label: "Alt", width: 55, height: 30 },
      { label: "Win", width: 55, height: 30 },
      { label: "Menu", width: 55, height: 30 },
      { label: "Ctrl", width: 55, height: 30 },
    ],
  ];

  // 添加console.log来测试热更新
  console.log("KeyBoard component rendered with layout:", keyboardLayout.length, "rows");

  return (
    <div className={Style.keyboardContainer}>
      <div className={Style.keyboardMain}>
        {/* 主键盘区域 */}
        {keyboardLayout.map((row, rowIndex) => (
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
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyBoard;
