import React, {useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { isMobile } from "@/utils/commonUtils";
import { initPageLayout } from '@/utils/lifeCircle';

import Home from '@/pages/Home';
import ReactionTest from '@/pages/ReactionTest';
import ColorSentivityTest from '@/pages/ColorSentivityTest';
import SideBar from '@/components/SideBar';
import MobilePages from '@/MobilePages';
import QrCode from '@/pages/QrCode';

import Toast from '@/components/Toast/demo';

import style from './App.scss'

function App() {

  useEffect(() => {
    initPageLayout(); // 初始化页面
    window.addEventListener('resize', () => {
      // 监听屏幕宽度变化，动态设置根字体大小，以适配不同屏幕。但是最小宽度为设计稿宽度
      initPageLayout();
      return () => {
        window.removeEventListener('resize');
      }
    })

  }, []);
  
  return isMobile()? (
    <div className={style.MainContainer}>
      <Routes>
        <Route path="/" element={<MobilePages />} />
      </Routes>
    </div>
  ): (
    <div className={style.MainContainer}>
      <SideBar />
      <div style={{
        flex: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        boxSizing: 'border-box',
        backgroundColor: '#F5F5F5',
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ReactionTest" element={<ReactionTest />} />
          <Route path="/ColorSentivityTest" element={<ColorSentivityTest />} />
          <Route path="/QrCode" element={<QrCode />} />
          <Route path="/TeastPage" element={<Toast />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;