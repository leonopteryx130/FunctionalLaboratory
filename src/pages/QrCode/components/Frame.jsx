import React from "react";
import { FrameStyles } from "../interface";

import style from './Frame.scss';
import Input from "@/components/Input";
import { px2rem } from "@/utils/commonUtils";

const Frame = () => {

  const [frameChoosed, setFrameChoosed] = React.useState(0);

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '22px',
      }}>
        {
          FrameStyles.map((item, index) => {
            return (
              <div 
                key={index} 
                className={style.designItem}
                onClick={() => setFrameChoosed(item.index)}
                style={{
                  backgroundColor: frameChoosed === item.index? '#D2E9F9': '#FFFFFF',
                  borderColor: frameChoosed === item.index? '#1E90FF': '#000000',
                }}
              >
                {item.icon}
              </div>
            )
          })
        }
      </div>
      <div style={{
        marginTop: px2rem(20),
      }}>Phrase</div>
      <Input 
        style={{
          width: px2rem(280),
          height: px2rem(44),
          marginTop: px2rem(16),
          borderRadius: px2rem(8),
          border: '1px solid #8E8E8E',
          fontSize: px2rem(16),
        }}
      />
    </div>
  )
}

export default Frame