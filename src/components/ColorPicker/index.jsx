import React, { useState } from 'react';
import style from './index.scss';

const ColorPicker = ({ value, onChange, label = '选择颜色' }) => {
  const [showColorInput, setShowColorInput] = useState(false);

  const handleColorChange = (e) => {
    const color = e.target.value;
    onChange && onChange(color);
    // 选择完颜色后自动隐藏颜色选择框
    setShowColorInput(false);
  };

  return (
    <div className={style.colorPicker}>
      {label && <div className={style.label}>{label}</div>}
      
      <div className={style.colorInputContainer}>
        <input
          type="color"
          value={value || '#000000'}
          onChange={handleColorChange}
          className={style.colorInput}
          autoFocus
        />
      </div>
    </div>
  );
};

export default ColorPicker; 