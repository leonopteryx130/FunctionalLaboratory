import React from "react";
import { QRCodeSVG } from 'qrcode.react'; // 二维码生成库
import QrCodeGrayIcon from '@/assets/icons/qrCode_gray.svg';

import style from './ViewQrcode.scss';

const ViewQrcode = (props) => {

  const { link, frameConfig } = props;
  const svgWrapperRef = React.useRef(null);

  const downloadSVG = () => {
    if (!link) return;
    const svgEl = svgWrapperRef.current?.querySelector('svg');
    if (!svgEl) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgEl);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'qrcode.svg';
    anchor.click();
    URL.revokeObjectURL(url);
  }

  const downloadPNG = () => {
    if (!link) return;
    const svgEl = svgWrapperRef.current?.querySelector('svg');
    if (!svgEl) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgEl);
    const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const scale = 4; // upscale for clearer PNG
      const canvas = document.createElement('canvas');
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const pngUrl = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = pngUrl;
        anchor.download = 'qrcode.png';
        anchor.click();
        URL.revokeObjectURL(pngUrl);
        URL.revokeObjectURL(url);
      });
    }
    img.src = url;
  }

  const showPhrase = frameConfig?.frameStyle === 'bottom' && frameConfig?.phrase && frameConfig.phrase.trim().length > 0;

  return (
    <div className={style.Container}>
      <p className={style.Title}>View QR Code</p>
      {
        link && link.length > 0? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div ref={svgWrapperRef}>
              <QRCodeSVG value={link} size={256} />
            </div>
            { showPhrase && (
              <div style={{
                marginTop: 8,
                padding: '6px 10px',
                borderRadius: 6,
                backgroundColor: '#1E90FF',
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: 600,
              }}>{frameConfig.phrase}</div>
            )}
          </div>
        ): <QrCodeGrayIcon />
      }
      {
        link && link.length > 0? (
          <>
            <p className={style.Link}>{link}</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={downloadPNG}>Download PNG</button>
              <button onClick={downloadSVG}>Download SVG</button>
            </div>
          </>
        ): <p className={style.Title}>请先生成二维码</p>
      }
    </div>
  );
}

export default ViewQrcode;