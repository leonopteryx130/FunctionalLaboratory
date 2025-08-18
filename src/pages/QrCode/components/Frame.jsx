import React from "react";
import { FrameStyles } from "../interface";

import style from './Frame.scss';
import Input from "@/components/Input";
import { px2rem } from "@/utils/commonUtils";

const Frame = (props) => {

  const { value, onChange } = props;
  const frameChoosed = value?.frameStyleIndex ?? 0;
  const phrase = value?.phrase ?? '';

  const handleChoose = (item) => {
    onChange && onChange({
      frameStyleIndex: item.index,
      frameStyle: item.value,
      phrase,
    });
  }

  const handlePhraseInput = (e) => {
    onChange && onChange({
      frameStyleIndex: frameChoosed,
      frameStyle: FrameStyles.find(f => f.index === frameChoosed)?.value || 'None',
      phrase: e.target.value,
    });
  }

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
                onClick={() => handleChoose(item)}
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
          padding: `0 ${px2rem(12)}`,
        }}
        placeholder="E.g. Scan me"
        onInput={handlePhraseInput}
        value={phrase}
      />
    </div>
  )
}

export default Frame