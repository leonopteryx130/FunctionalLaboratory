import React, { useState } from 'react';
import Key from './components/Key';
import KeyBoard from './components/keyBoard';
import { px2rem } from '../../utils/commonUtils';
import './index.scss';

const HandSpeedTest = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleKeyClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div>
    <div style={{
      margin: px2rem(20),
      display: 'flex',
      gap: px2rem(20),
      flexWrap: 'wrap'
    }}>
        {/* 霓虹紫色按钮 - 赛博朋克风格 */}
        <Key 
          label="FIRE"
          keyBackground="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          textColor="#ffffff"
          glowColor="#ff00ff"
          width={120}
          height={120}
          onClick={handleKeyClick}
        />
        
        {/* 火焰橙色按钮 - 能量风格 */}
        <Key 
          label="BOST"
          keyBackground="linear-gradient(45deg, #ff6b35, #f7931e, #ffd23f)"
          textColor="#ffffff"
          glowColor="#ff4500"
          width={120}
          height={120}
          onClick={handleKeyClick}
        />
        
        {/* 深海蓝色按钮 - 科技风格 */}
        <Key 
          label="DEEP"
          keyBackground="linear-gradient(180deg, #0ea5e9 0%, #1e40af 50%, #0f172a 100%)"
          textColor="#00ffff"
          glowColor="#00bfff"
          width={120}
          height={120}
          onClick={handleKeyClick}
        />
    </div>
    <KeyBoard />
    </div>
  );
};

export default HandSpeedTest;
