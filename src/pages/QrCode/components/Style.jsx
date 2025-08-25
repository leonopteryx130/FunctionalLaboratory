import React from "react";
import ColorPicker from "@/components/ColorPicker";
import { px2rem } from "@/utils/commonUtils";
import style from './Style.scss';

const Style = (props) => {
  const { value, onChange } = props;
  
  const defaultConfig = {
    foregroundColor: '#000000',
    backgroundColor: '#FFFFFF',
    cornerRadius: 0
  };

  const currentConfig = value || defaultConfig;

  const handleColorChange = (type, color) => {
    const newConfig = {
      ...currentConfig,
      [type === 'foreground' ? 'foregroundColor' : 'backgroundColor']: color
    };
    onChange && onChange(newConfig);
  };

  const handleCornerRadiusChange = (radius) => {
    const newConfig = {
      ...currentConfig,
      cornerRadius: radius
    };
    onChange && onChange(newConfig);
  };

  return (
    <div className={style.styleContainer}>
      <div className={style.contentWrapper}>
        <div className={style.leftColumn}>
          <div className={style.section}>
            <h3 className={style.sectionTitle}>二维码颜色</h3>
            <div className={style.colorAndRadiusSection}>
              <div className={style.colorSection}>
                <ColorPicker
                  label="前景色"
                  value={currentConfig.foregroundColor}
                  onChange={(color) => handleColorChange('foreground', color)}
                />
                <ColorPicker
                  label="背景色"
                  value={currentConfig.backgroundColor}
                  onChange={(color) => handleColorChange('background', color)}
                />
              </div>
              <div className={style.radiusSection}>
                <span className={style.radiusLabel}>圆角</span>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={currentConfig.cornerRadius}
                  onChange={(e) => handleCornerRadiusChange(Number(e.target.value))}
                  className={style.radiusSlider}
                />
                <span className={style.radiusValue}>{currentConfig.cornerRadius}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className={style.rightColumn}>
          <div className={style.preview}>
            <h3 className={style.sectionTitle}>预览</h3>
            <div 
              className={style.qrPreview}
              style={{
                backgroundColor: currentConfig.backgroundColor,
                borderRadius: `${currentConfig.cornerRadius}%`
              }}
            >
              <div 
                className={style.qrDot}
                style={{
                  backgroundColor: currentConfig.foregroundColor
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style; 