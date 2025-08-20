import React, { useState } from "react";
import { QRCodeSVG } from 'qrcode.react'; // 二维码生成库

import CommonBackToHome from "@/components/CommonBackToHome";
import Website from "./components/Website";
import Text from "./components/Text";
import Phone from "./components/Phone";
import Frame from "./components/Frame";
import Style from "./components/Style";
import ViewQrcode from "./components/ViewQrcode";

import { QrCodeOptions, DesignTabs, FrameStyles } from "./interface";
import style from './index.scss';
import { px2rem } from "../../utils/commonUtils";
import { envConfig } from "../../utils/config";

const QrCode = () => {

  const [qrCodeContentType, setQrCodeContentType] = useState(QrCodeOptions[0].value); // 二维码内容类型, 默认为选项第一个
  const [designTab, setDesignTab] = useState(DesignTabs[0].value); // 二维码设计选项卡, 默认为选项第一个

  const [url, setUrl] = useState(''); // 链接
  const [commonText, setCommonText] = useState(''); // 文本

  const [hoverIdx, setHoverIdx] = useState(null); // 鼠标悬浮的选项
  const [formData, setFormData] = useState(null); // 表单数据

  const [qrCodeLink, setQrCodeLink] = useState(''); // 二维码链接
  const [frameConfig, setFrameConfig] = useState({ frameStyleIndex: 0, frameStyle: 'None', phrase: '' });
  const [styleConfig, setStyleConfig] = useState({ foregroundColor: '#000000', backgroundColor: '#FFFFFF', cornerRadius: 0, dotStyle: 'square' });

  const handleCall = () => {
    const myLink = document.getElementById('myLink');
    myLink.click();
  }

  const isValidUrl = (value) => {
    try {
      const hasScheme = /^(https?:)?\/\//i.test(value);
      const normalized = hasScheme ? value : `https://${value}`;
      new URL(normalized);
      return true;
    } catch (e) {
      return false;
    }
  }

  const buildPayload = () => {
    switch (qrCodeContentType) {
      case 'Link':
        if (!formData?.url || formData.url.trim().length === 0) return '';
        const raw = formData.url.trim();
        const normalized = /^(https?:)?\/\//i.test(raw) ? raw : `https://${raw}`;
        if (!isValidUrl(normalized)) return '';
        return normalized;
      case 'Text':
        if (!formData?.text || formData.text.trim().length === 0) return '';
        const text = formData.text.trim();
        // 将文本拼接到指定链接的text参数后
        return `${envConfig.outSourcePage}/#/qrCode/pureText?text=${encodeURIComponent(text)}`;
      case 'Phone':
        if (!formData?.phone || formData.phone.trim().length === 0) return '';
        const phone = formData.phone.trim();
        // 将手机号拼接到指定链接的phone参数后
        return `${envConfig.outSourcePage}/#/qrCode/phoneNumber?phone=${encodeURIComponent(phone)}`;
      default:
        return '';
    }
  }

  const handleGenerateBtn = () => {
    const payload = buildPayload();
    if (!payload) {
      let message = '';
      switch (qrCodeContentType) {
        case 'Link':
          message = '请输入有效的网址';
          break;
        case 'Text':
          message = '请输入文本';
          break;
        case 'Phone':
          message = '请输入手机号';
          break;
        default:
          message = '请输入内容';
      }
      alert(message);
      return;
    }
    setQrCodeLink(payload);
  }

  const handleInput = (e) => {
    switch (qrCodeContentType) {
      case 'Link':
        setFormData({
          url: e.target.value,
        })
        break;
      case 'Text':
        setFormData({
          text: e.target.value,
        })
        break;
      case 'Email':
        break;
      case 'Phone':
        setFormData({
          phone: e.target.value,
        })
        break;
      default:
        break;
    }
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
        return <Phone handleInput={handleInput} />;
      default:
        return null;
    }
  }

  const qrCodeDesignComp = () => {
    switch (designTab) {
      case 'Frame':
        return <Frame value={frameConfig} onChange={(v) => setFrameConfig(v)} />;
      case 'Style':
        return <Style value={styleConfig} onChange={(v) => setStyleConfig(v)} />;
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
              height: px2rem(90),
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
        <div className={style.qrCodeViewContainer} style={{flex: 1}}>
          {/* 二维码展示区域 */}
          <ViewQrcode link={qrCodeLink} frameConfig={frameConfig} styleConfig={styleConfig} />
        </div>
      </div>
    </div>
  );
}

export default QrCode;