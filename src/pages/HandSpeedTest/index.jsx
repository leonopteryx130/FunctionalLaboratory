import React, { useState } from 'react';
import Key from './components/Key';
import KeyBoard from './components/keyBoard';
import { px2rem } from '../../utils/commonUtils';
import { 
  KEY_STYLES, 
  CONTROL_PANEL_STYLE, 
  LABEL_STYLE, 
  CHECKBOX_STYLE, 
  HINT_STYLE, 
  BUTTON_CONTAINER_STYLE 
} from './config';
import './index.scss';

const HandSpeedTest = () => {
  const [clickCount, setClickCount] = useState(0);
  const [enableKeyboard, setEnableKeyboard] = useState(false);

  const handleKeyClick = () => {
    setClickCount(prev => prev + 1);
  };

  const toggleKeyboard = () => {
    setEnableKeyboard(prev => !prev);
  };

  return (
    <div>
      {/* 键盘监听控制开关 */}
      <div style={{
        ...CONTROL_PANEL_STYLE,
        margin: px2rem(CONTROL_PANEL_STYLE.margin),
        gap: px2rem(CONTROL_PANEL_STYLE.gap),
        padding: px2rem(CONTROL_PANEL_STYLE.padding),
        borderRadius: px2rem(CONTROL_PANEL_STYLE.borderRadius)
      }}>
        <label style={{
          ...LABEL_STYLE,
          fontSize: px2rem(LABEL_STYLE.fontSize)
        }}>
          <input
            type="checkbox"
            checked={enableKeyboard}
            onChange={toggleKeyboard}
            style={{
              ...CHECKBOX_STYLE,
              marginRight: px2rem(CHECKBOX_STYLE.marginRight)
            }}
          />
          启用键盘监听 ({enableKeyboard ? '开启' : '关闭'})
        </label>
        {enableKeyboard && (
          <span style={{
            ...HINT_STYLE,
            fontSize: px2rem(HINT_STYLE.fontSize)
          }}>
            💡 现在可以按键盘按键查看反馈效果
          </span>
        )}
      </div>

      <div style={{
        ...BUTTON_CONTAINER_STYLE,
        margin: px2rem(BUTTON_CONTAINER_STYLE.margin),
        gap: px2rem(BUTTON_CONTAINER_STYLE.gap)
      }}>
        {/* 霓虹紫色按钮 - 赛博朋克风格 */}
        <Key 
          {...KEY_STYLES.FIRE}
          onClick={handleKeyClick}
        />
        
        {/* 火焰橙色按钮 - 能量风格 */}
        <Key 
          {...KEY_STYLES.BOOST}
          onClick={handleKeyClick}
        />
        
        {/* 深海蓝色按钮 - 科技风格 */}
        <Key 
          {...KEY_STYLES.DEEP}
          onClick={handleKeyClick}
        />
      </div>
      
      <KeyBoard enableKeyboard={enableKeyboard} />
    </div>
  );
};

export default HandSpeedTest;
