import React, { useState } from "react";
import './index.scss';
//import scssStyle from './index.scss';

const TextArea = (props) => {
  const { style, placeholder, type, onInput, maxTextNumLimit } = props;

  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
    // 把输入的内容传递给父组件，并且传递当前文本长度和是否超出字数限制
    onInput && onInput({
      ...e,
      textLength: e.target.value.length, // 文本长度
      isOverLimit: e.target.value.length > maxTextNumLimit, // 是否超出字数限制
    });
  }
  
  return (
    <div style={{
      position: 'relative',
    }}>
      <textarea 
        type={type || "text"} 
        placeholder={placeholder || ""} 
        style={{
          ...style,
          '--font-size': style.fontSize,
        }}
        onInput={handleInput}
      />
      {/* 字数限制提示 */
        maxTextNumLimit && (
          <p style={{
            position: 'absolute',
            bottom: '15px',
            right: '10px',
            fontSize: '12px',
            color: text.length > maxTextNumLimit ? 'red' : '#8E8E8E',
          }}>字数限制 {text.length}/{maxTextNumLimit}</p>
        )
      }
    </div>
  )
}



export default TextArea;