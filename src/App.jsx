import React, {useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import ReactionTest from './pages/ReactionTest';
import SideBar from '@/components/SideBar';
import { initPageLayout } from '@/utils/lifeCircle';
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

  return (
    <div className={style.MainContainer}>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ReactionTest" element={<ReactionTest />} />
      </Routes>
    </div>
  );
}

export default App;