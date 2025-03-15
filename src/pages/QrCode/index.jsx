import React, { useState } from "react";

import CommonBackToHome from "@/components/CommonBackToHome";
import Website from "./components/Website";

import { QrCodeOptions } from "./interface";
import style from './index.scss';

const QrCode = () => {

  const [qrCodeContentType, setQrCodeContentType] = useState(QrCodeOptions[0].value); // 二维码内容类型, 默认为选项第一个
  const [hoverIdx, setHoverIdx] = useState(null); // 鼠标悬浮的选项

  const handleCall = () => {
    const myLink = document.getElementById('myLink');
    myLink.click();
  }

  const qrCodeContent = () => {
    switch (qrCodeContentType) {
      case 'Link':
        return <Website />;
      case 'Text':
        return <div>Text</div>;
      case 'Email':
        return <div>Email</div>;
      case 'Phone':
        return <div>Phone</div>;
      default:
        return null;
    }
  }

  return (
    <div className={style.Container}>
      <CommonBackToHome />
      <div className={style.ContentArea}>
        <div>
          {/* 二维码内容类型选择区域 */}
          <div className={style.OperateArea}>
            <div className={style.FunctionsChooseBar}>
              {
                QrCodeOptions.map((option, index) => {
                  return (
                    <div 
                      key={index} 
                      className={`${style.ChooseItem} ${qrCodeContentType === option.value ? style.ChooseItemActive : ''}`}
                      onClick={() => setQrCodeContentType(option.value)}
                      onMouseEnter={() => setHoverIdx(index)}
                      onMouseLeave={() => setHoverIdx(null)}
                    >
                      { qrCodeContentType === option.value || index === hoverIdx? option.iconActive: option.icon}
                      <p>{option.label}</p>
                    </div>
                  )
                })
              }
              </div>
              {/**
               *              <a href="tel:15349069180" id="myLink" style={{display: 'none'}}>电话标签</a>
              <div onClick={() => handleCall()}>点击</div>
               */}
          </div>
          <div className={style.QRcodeContentArea}>
            <div className={style.TitleArea}>
              <div className={style.SerialNumber}>1</div>
              <p>Complete the content</p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              height: '90px',
            }}>
              {
                qrCodeContent()
              }
            </div>
            <div className={style.TitleArea}>
              <div className={style.SerialNumber}>2</div>
              <p>Design your QR Code</p>
            </div>
          </div>
        </div>
        <div style={{flex: 1}}>
          {/* 二维码展示区域 */}
        </div>
      </div>
    </div>
  );
}

export default QrCode;