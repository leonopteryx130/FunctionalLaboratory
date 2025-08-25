// HandSpeedTest 组件配置文件

// 按键样式配置
export const KEY_STYLES = {
  // 霓虹紫色按钮 - 赛博朋克风格
  FIRE: {
    label: "FIRE",
    keyBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    textColor: "#ffffff",
    glowColor: "#ff00ff",
    width: 120,
    height: 120
  },
  
  // 火焰橙色按钮 - 能量风格
  BOOST: {
    label: "BOOST",
    keyBackground: "linear-gradient(45deg, #ff6b35, #f7931e, #ffd23f)",
    textColor: "#ffffff",
    glowColor: "#ff4500",
    width: 120,
    height: 120
  },
  
  // 深海蓝色按钮 - 科技风格
  DEEP: {
    label: "DEEP",
    keyBackground: "linear-gradient(180deg, #0ea5e9 0%, #1e40af 50%, #0f172a 100%)",
    textColor: "#00ffff",
    glowColor: "#00bfff",
    width: 120,
    height: 120
  }
};

// 键盘布局配置
export const KEYBOARD_LAYOUT = [
  // 第一行 - 数字键
  [
    { label: "`", width: 35, height: 30, keyCode: "Backquote" },
    { label: "1", width: 35, height: 30, keyCode: "Digit1" },
    { label: "2", width: 35, height: 30, keyCode: "Digit2" },
    { label: "3", width: 35, height: 30, keyCode: "Digit3" },
    { label: "4", width: 35, height: 30, keyCode: "Digit4" },
    { label: "5", width: 35, height: 30, keyCode: "Digit5" },
    { label: "6", width: 35, height: 30, keyCode: "Digit6" },
    { label: "7", width: 35, height: 30, keyCode: "Digit7" },
    { label: "8", width: 35, height: 30, keyCode: "Digit8" },
    { label: "9", width: 35, height: 30, keyCode: "Digit9" },
    { label: "0", width: 35, height: 30, keyCode: "Digit0" },
    { label: "-", width: 35, height: 30, keyCode: "Minus" },
    { label: "=", width: 35, height: 30, keyCode: "Equal" },
    { label: "Backspace", width: 70, height: 30, keyCode: "Backspace" },
  ],
  // 第二行 - QWERTY
  [
    { label: "Tab", width: 55, height: 30, keyCode: "Tab" },
    { label: "Q", width: 35, height: 30, keyCode: "KeyQ" },
    { label: "W", width: 35, height: 30, keyCode: "KeyW" },
    { label: "E", width: 35, height: 30, keyCode: "KeyE" },
    { label: "R", width: 35, height: 30, keyCode: "KeyR" },
    { label: "T", width: 35, height: 30, keyCode: "KeyT" },
    { label: "Y", width: 35, height: 30, keyCode: "KeyY" },
    { label: "U", width: 35, height: 30, keyCode: "KeyU" },
    { label: "I", width: 35, height: 30, keyCode: "KeyI" },
    { label: "O", width: 35, height: 30, keyCode: "KeyO" },
    { label: "P", width: 35, height: 30, keyCode: "KeyP" },
    { label: "[", width: 35, height: 30, keyCode: "BracketLeft" },
    { label: "]", width: 35, height: 30, keyCode: "BracketRight" },
    { label: "\\", width: 50, height: 30, keyCode: "Backslash" },
  ],
  // 第三行 - ASDF
  [
    { label: "Caps", width: 80, height: 30, keyCode: "CapsLock" },
    { label: "A", width: 35, height: 30, keyCode: "KeyA" },
    { label: "S", width: 35, height: 30, keyCode: "KeyS" },
    { label: "D", width: 35, height: 30, keyCode: "KeyD" },
    { label: "F", width: 35, height: 30, keyCode: "KeyF" },
    { label: "G", width: 35, height: 30, keyCode: "KeyG" },
    { label: "H", width: 35, height: 30, keyCode: "KeyH" },
    { label: "J", width: 35, height: 30, keyCode: "KeyJ" },
    { label: "K", width: 35, height: 30, keyCode: "KeyK" },
    { label: "L", width: 35, height: 30, keyCode: "KeyL" },
    { label: ";", width: 35, height: 30, keyCode: "Semicolon" },
    { label: "'", width: 35, height: 30, keyCode: "Quote" },
    { label: "Enter", width: 85, height: 30, keyCode: "Enter" },
  ],
  // 第四行 - ZXCV
  [
    { label: "Shift", width: 111, height: 30, keyCode: "ShiftLeft" },
    { label: "Z", width: 35, height: 30, keyCode: "KeyZ" },
    { label: "X", width: 35, height: 30, keyCode: "KeyX" },
    { label: "C", width: 35, height: 30, keyCode: "KeyC" },
    { label: "V", width: 35, height: 30, keyCode: "KeyV" },
    { label: "B", width: 35, height: 30, keyCode: "KeyB" },
    { label: "N", width: 35, height: 30, keyCode: "KeyN" },
    { label: "M", width: 35, height: 30, keyCode: "KeyM" },
    { label: ",", width: 35, height: 30, keyCode: "Comma" },
    { label: ".", width: 35, height: 30, keyCode: "Period" },
    { label: "/", width: 35, height: 30, keyCode: "Slash" },
    { label: "Shift", width: 111, height: 30, keyCode: "ShiftRight" },
  ],
  // 第五行 - 控制键
  [
    { label: "Ctrl", width: 65, height: 30, keyCode: "ControlLeft" },
    { label: "Win", width: 65, height: 30, keyCode: "MetaLeft" },
    { label: "Alt", width: 65, height: 30, keyCode: "AltLeft" },
    { label: "Space", width: 230, height: 30, keyCode: "Space" },
    { label: "Alt", width: 65, height: 30, keyCode: "AltRight" },
    { label: "Win", width: 65, height: 30, keyCode: "MetaRight" },
    { label: "Menu", width: 65, height: 30, keyCode: "ContextMenu" },
    { label: "Ctrl", width: 65, height: 30, keyCode: "ControlRight" },
  ],
];

// 键盘按键默认样式
export const KEYBOARD_KEY_STYLE = {
  keyBackground: "#1e3a5f",
  textColor: "#ffffff",
  glowColor: "#87ceeb",
  backgroundOpacity: 0.9
};

// 控制面板样式配置
export const CONTROL_PANEL_STYLE = {
  margin: 20,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: 15,
  background: 'rgba(30, 58, 95, 0.1)',
  borderRadius: 8,
  border: '1px solid rgba(135, 206, 235, 0.3)'
};

// 标签样式配置
export const LABEL_STYLE = {
  color: '#ffffff',
  fontSize: 14,
  fontWeight: '500',
  cursor: 'pointer'
};

// 复选框样式配置
export const CHECKBOX_STYLE = {
  marginRight: 8,
  transform: 'scale(1.2)'
};

// 提示信息样式配置
export const HINT_STYLE = {
  color: '#87ceeb',
  fontSize: 12,
  fontStyle: 'italic'
};

// 按钮容器样式配置
export const BUTTON_CONTAINER_STYLE = {
  margin: 20,
  display: 'flex',
  gap: 20,
  flexWrap: 'wrap'
};

// 动画配置
export const ANIMATION_CONFIG = {
  transition: "all 0.15s ease",
  pressedScale: 0.95,
  pressedTranslate: "2px"
};

// 默认值配置
export const DEFAULT_VALUES = {
  glowColor: "#00ff00",
  backgroundOpacity: 1,
  isPressed: false
};
