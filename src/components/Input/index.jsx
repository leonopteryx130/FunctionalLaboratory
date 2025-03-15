import React from "react";
import './index.scss';
//import scssStyle from './index.scss';

const Input = (props) => {
  const { style, placeholder, type } = props;
  return (
    <input 
      type={type || "text"} 
      placeholder={placeholder || ""} 
      style={{
        ...style,
        '--font-size': style.fontSize,
      }}
    />
  )
}



export default Input;