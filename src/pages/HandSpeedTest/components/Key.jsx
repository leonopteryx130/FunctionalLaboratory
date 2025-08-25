import React from "react";
import { px2rem, getBackgroundColorWithOpacity } from "../../../utils/commonUtils";
import Style from "./Key.scss";
import { DEFAULT_VALUES, ANIMATION_CONFIG } from "../config";

const Key = (props) => {

  const {
    label,
    keyBackground,
    textColor,
    width,
    height,
    glowColor = DEFAULT_VALUES.glowColor,
    backgroundOpacity = DEFAULT_VALUES.backgroundOpacity,
    isPressed = DEFAULT_VALUES.isPressed,
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
        boxShadow: isPressed 
          ? `0 0 25px ${glowColor}, 0 0 50px ${glowColor}88, 0 0 75px ${glowColor}44` // 按下时增强背光效果
          : `0 0 16px ${glowColor}88`, // 默认更小更淡的背光
        transition: ANIMATION_CONFIG.transition, // 使用配置的动画时间
        transform: isPressed ? `translateY(${ANIMATION_CONFIG.pressedTranslate}) scale(${ANIMATION_CONFIG.pressedScale})` : "translateY(0) scale(1)", // 按下时的形变效果
        "--glow-color": glowColor,
        "--pressed-scale": isPressed ? ANIMATION_CONFIG.pressedScale : 1,
        "--pressed-translate": isPressed ? ANIMATION_CONFIG.pressedTranslate : "0px",
      }}
      data-glow-color={glowColor}
      data-pressed={isPressed}
    >
      <div className={Style.keyLabel}>{label}</div>
    </div>
  )
}

export default Key;