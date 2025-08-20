import React, { useEffect, useRef } from "react";
import { QRCodeSVG } from 'qrcode.react'; // 二维码生成库
import QrCodeGrayIcon from '@/assets/icons/qrCode_gray.svg';

import style from './ViewQrcode.scss';

const ViewQrcode = (props) => {

  const { link, frameConfig, styleConfig } = props;
  const svgWrapperRef = useRef(null);

  // 检查是否为文本类型的二维码链接
  const isTextQrCode = link && link.includes('150.158.147.14:9011/#/qrCode/pureText');
  
  // 从链接中提取文本内容
  const getTextContent = () => {
    if (!isTextQrCode) return '';
    try {
      const url = new URL(link);
      const textParam = url.searchParams.get('text');
      return textParam || '';
    } catch (e) {
      return '';
    }
  };

  const textContent = getTextContent();

  // 应用自定义样式到生成的二维码
  useEffect(() => {
    if (svgWrapperRef.current && link && styleConfig) {
      const svg = svgWrapperRef.current.querySelector('svg');
      if (svg) {
        // 应用圆角到背景
        if (styleConfig.cornerRadius && styleConfig.cornerRadius > 0) {
          const background = svg.querySelector('rect:first-child');
          if (background) {
            const size = 256;
            const radius = (styleConfig.cornerRadius / 100) * size;
            background.setAttribute('rx', radius);
            background.setAttribute('ry', radius);
          }
        }

        // 应用点样式
        if (styleConfig.dotStyle && styleConfig.dotStyle !== 'square') {
          const modules = svg.querySelectorAll('rect:not(:first-child)');
          modules.forEach(module => {
            if (styleConfig.dotStyle === 'dots') {
              // 将矩形转换为圆形
              const x = parseFloat(module.getAttribute('x'));
              const y = parseFloat(module.getAttribute('y'));
              const width = parseFloat(module.getAttribute('width'));
              const height = parseFloat(module.getAttribute('height'));
              const fill = module.getAttribute('fill');
              
              // 创建圆形元素
              const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
              circle.setAttribute('cx', x + width / 2);
              circle.setAttribute('cy', y + height / 2);
              circle.setAttribute('r', width / 2);
              circle.setAttribute('fill', fill);
              
              // 替换矩形
              module.parentNode.replaceChild(circle, module);
            } else if (styleConfig.dotStyle === 'rounded') {
              // 应用圆角到矩形
              const width = parseFloat(module.getAttribute('width'));
              const radius = width * 0.2;
              module.setAttribute('rx', radius);
              module.setAttribute('ry', radius);
            }
          });
        }
      }
    }
  }, [link, styleConfig]);

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
              <QRCodeSVG 
                value={link} 
                size={256}
                fgColor={styleConfig?.foregroundColor || '#000000'}
                bgColor={styleConfig?.backgroundColor || '#FFFFFF'}
                level="M"
                includeMargin={true}
              />
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