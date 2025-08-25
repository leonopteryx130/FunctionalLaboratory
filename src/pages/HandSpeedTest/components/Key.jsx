import React from "react";
import { px2rem, getBackgroundColorWithOpacity } from "../../../utils/commonUtils";
import Style from "./Key.scss";

const Key = (props) => {

  const {
    label,
    keyBackground,
    textColor,
    width,
    height,
    glowColor = "#00ff00", // 默认绿色背光
    backgroundOpacity = 1, // 默认完全不透明
  } = props;

  // 检查是否为渐变背景
  const isGradient = keyBackground && keyBackground.includes('gradient');
  
  return (
    <div className={Style.keyContainer}
      style={{
        background: isGradient ? keyBackground : getBackgroundColorWithOpacity(keyBackground, backgroundOpacity),
        color: textColor,
        width: px2rem(width),
        height: px2rem(height),
        boxShadow: `0 0 16px ${glowColor}88`, // 默认更小更淡的背光
        transition: "all 0.5s ease", // 改为0.5s动画延迟
        "--glow-color": glowColor,
      }}
      data-glow-color={glowColor}
    >
      <div className={Style.keyLabel}>{label}</div>
    </div>
  )
}

export default Key;