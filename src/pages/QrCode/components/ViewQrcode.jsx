import React from "react";
import { QRCodeSVG } from 'qrcode.react'; // 二维码生成库
import QrCodeGrayIcon from '@/assets/icons/qrCode_gray.svg';

import style from './ViewQrcode.scss';

const ViewQrcode = (props) => {

  const { link } = props;

  return (
    <div className={style.Container}>
      <p className={style.Title}>View QR Code</p>
      {
        link && link.length > 0? (
          <QRCodeSVG value={'https://www.baidu.com'} size={256} />
        ): <QrCodeGrayIcon />
      }
      {
        link && link.length > 0? (
          <p className={style.Link}>{link}</p>
        ): <p className={style.Title}>请先生成二维码</p>
      }
    </div>
  );
}

export default ViewQrcode;