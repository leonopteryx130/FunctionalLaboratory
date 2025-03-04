import React from "react";

const MobilePages = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      boxSizing: 'border-box',
      padding: '0 75px'
    }}>
      <div style={{
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#6E6E6E',
        textAlign: 'center'
      }}>
        暂不支持移动端，请移步PC端体验
      </div>
    </div>
  );
}

export default MobilePages;