import React from "react";

import HomeSvg from '@/assets/icons/home.svg'
import style from './index.scss';

const SideBar = () => {
  return (
    <div className={style.Container}>
      <div className={style.Title}>Webapp Universe</div>
      <div className={style.SideBarItems}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <HomeSvg />
          <div>主页</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;