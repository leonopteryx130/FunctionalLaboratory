import React from "react";

import HomeSvg from '@/assets/icons/home.svg'
import { px2rem } from "@/utils/commonUtils";
import style from './index.scss';

const SideBar = () => {
  return (
    <div className={style.Container}>
      <div className={style.Title}>Webapp Universe</div>
      <div className={style.SideBarItems}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
          <HomeSvg style={{
            marginRight: px2rem(16),
          }}/>
          <div style={{
            fontSize: px2rem(16),
          }}>主页</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;