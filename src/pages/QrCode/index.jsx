import React, { useState } from "react";

import CommonBackToHome from "@/components/CommonBackToHome";
import Website from "./components/Website";
import Text from "./components/Text";
import Frame from "./components/Frame";

import { QrCodeOptions, DesignTabs, FrameStyles } from "./interface";
import style from './index.scss';

const QrCode = () => {

  const [qrCodeContentType, setQrCodeContentType] = useState(QrCodeOptions[0].value); // 二维码内容类型, 默认为选项第一个
  const [designTab, setDesignTab] = useState(DesignTabs[0].value); // 二维码设计选项卡, 默认为选项第一个
  const [hoverIdx, setHoverIdx] = useState(null); // 鼠标悬浮的选项
  const [formData, setFormData] = useState(null); // 表单数据

  const handleCall = () => {
    const myLink = document.getElementById('myLink');
    myLink.click();
  }

  const handleGenerateBtn = () => {
    console.log('formData', formData)
  }

  const handleInput = (e) => {
    setFormData(e.target.value)
  }

  const qrCodeContent = () => {
    switch (qrCodeContentType) {
      case 'Link':
        return <Website handleInput={handleInput} />;
      case 'Text':
        return <Text handleInput={handleInput} />;
      case 'Email':
        return <div>Email</div>;
      case 'Phone':
        return <div>Phone</div>;
      default:
        return null;
    }
  }

  const qrCodeDesignComp = () => {
    switch (designTab) {
      case 'Frame':
        return <Frame />;
      case 'Style':
        return <div>Style</div>;
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
            <div className={style.designTabs}>
              {
                DesignTabs.map((tab, index) => {
                  return (
                    <div 
                      key={index} 
                      className={`${style.designTab} ${tab.value === designTab? style.designTabActive: ''}`}
                      onClick={() => setDesignTab(tab.value)}
                    >
                      {tab.label}
                    </div>
                  )
                })
              }
            </div>
            <div className={style.designContainer}>
              {
                qrCodeDesignComp()
              }
            </div>
            <div onClick={handleGenerateBtn} className={style.generateButton}>
              生成二维码
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