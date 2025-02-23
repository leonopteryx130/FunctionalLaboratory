import React from 'react';
import { useNavigate } from "react-router-dom";

import { px2rem } from '@/utils/commonUtils';
import { homePageModules } from './interface';
import style from './index.scss';

const Home = () => {
  const navigate = useNavigate();

  console.log("Home", style);

  return (
    <div className={style.Container}>
      {
        homePageModules.map((module, index) => {
          return (
            <div key={index}>
              <div className={style.Title}>{module.name}</div>
              <div className={style.TitleDescription}>{module.describe}</div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: px2rem(16),
                marginTop: px2rem(42),
              }}>
                {
                  module.showCards.map((card, index) => {
                    return (
                      <div key={index} onClick={() => navigate(card.router)}>
                        <div>
                          <img className={style.CardPicture} src={card.pic} alt="" />
                        </div>
                        <div className={style.CardName}>{card.name}</div>
                        <div className={style.CardDescription}>{card.describe}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Home;