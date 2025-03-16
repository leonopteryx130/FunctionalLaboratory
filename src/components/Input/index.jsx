import React from "react";
import { px2rem } from "@/utils/commonUtils";
import './index.scss';
//import scssStyle from './index.scss';

const Input = (props) => {
  const { style, placeholder, type, onInput } = props;

  const handleInput = (e) => {
    // 把输入的内容传递给父组件，并且传递当前文本长度和是否超出字数限制
    onInput && onInput(e);
  }

  return (
    <input 
      type={type || "text"} 
      placeholder={placeholder || ""} 
      style={{
        ...style,
        '--font-size': style?.fontSize || px2rem(14),
      }}
      onInput={handleInput}
    />
  )
}



export default Input;