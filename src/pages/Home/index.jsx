import React from 'react';
import { useNavigate } from "react-router-dom";

import { px2rem } from '../../utils/commonUtils';
import style from './index.scss';

const Home = () => {
  const navigate = useNavigate();

  console.log("Home", style);

  return (
    <div className={style.Container}>
      <div style={{
        width: px2rem(100),
        backgroundColor: 'blue',
      }}></div>
      <div onClick={() => navigate("/ReactionTest")}>
        反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口反应测试入口
      </div>
    </div>
  );
}

export default Home;