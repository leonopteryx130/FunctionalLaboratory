import React from "react";
import { useNavigate } from "react-router-dom";

import { px2rem } from "@/utils/commonUtils";
import BackIcon from '@/assets/icons/back.svg';
import style from './index.scss';

const CommonBackToHome = (props) => {

  const navigate = useNavigate();

  return (
      <div 
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: "100%",
            marginLeft: px2rem(80),
            marginTop: px2rem(40),
        }}
        onClick={() => {
            navigate("/");
        }}
      >
        <BackIcon width={px2rem(32)} height={px2rem(32)}/>
        <div className={style.BackText}>Back To Home</div>
      </div>
  );
}

export default CommonBackToHome;