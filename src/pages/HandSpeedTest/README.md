# HandSpeedTest 键盘监听功能

## 新增功能

### 键盘监听开关
- 添加了 `enableKeyboard` 参数来控制键盘监听功能
- 当设置为 `true` 时，会监听键盘按键事件
- 当设置为 `false` 时，不会监听键盘事件

### 炫舞风格按键反馈
- 按下键盘按键时，对应的虚拟按键会显示视觉反馈
- 反馈效果包括：
  - 按键下沉动画（translateY + scale）
  - 增强的发光效果（多层box-shadow）
  - 亮度增强（brightness + contrast）
  - 边框发光动画效果

## 使用方法

### 基本用法
```jsx
// 启用键盘监听
<KeyBoard enableKeyboard={true} />

// 禁用键盘监听（默认）
<KeyBoard enableKeyboard={false} />
```

### 在HandSpeedTest页面中
页面顶部有一个复选框开关，可以控制是否启用键盘监听功能。

## 技术实现

### KeyBoard组件
- 使用 `useState` 管理按键按下状态
- 使用 `useEffect` 添加/移除键盘事件监听器
- 为每个按键添加唯一的 `keyCode` 标识

### Key组件
- 新增 `isPressed` 属性
- 按下时应用特殊的CSS动画和样式
- 使用CSS变量实现动态样式切换

### 样式效果
- 快速动画（0.15s）提供即时反馈
- 多层发光效果增强视觉冲击
- 按键形变效果模拟真实按键感受

## 支持的按键
- 数字键：0-9, `, -, =
- 字母键：A-Z
- 功能键：Tab, Caps Lock, Shift, Ctrl, Alt, Win, Space, Enter
- 符号键：[, ], \, ;, ', ,, ., /

## 注意事项
- 键盘监听只在 `enableKeyboard={true}` 时生效
- 事件监听器会在组件卸载时自动清理
- 支持同时按下多个按键 