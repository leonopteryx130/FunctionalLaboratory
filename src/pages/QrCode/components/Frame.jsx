import React from "react";
import { FrameStyles } from "../interface";

import style from './Frame.scss';
import Input from "@/components/Input";

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
        marginTop: '20px',
      }}>Phrase</div>
      <Input 
        style={{
          width: '280px',
          height: '44px',
          marginTop: '16px',
          borderRadius: '8px',
          border: '1px solid #8E8E8E',
          fontSize: '16px',
        }}
      />
    </div>
  )
}

export default Frame