import React from "react";
import Input from "@/components/Input";

const Website = () => {
  return (
    <div style={style.Container}>
      <p style={{
        fontSize: '14px',
        marginBottom: '10px',
      }}>
        Please enter the website you want to generate the QR code for
      </p>
      <Input style={{
        width: '100%',
        height: '60px',
        border: '0px solid #D9D9D9',
        borderRadius: '4px',
        padding: '0 10px',
        boxSizing: 'border-box',
        boxShadow: '0 0 20px 4px rgba(189,189,189, 0.1)',
        fontSize: '16px',
        color: '#8E8E8E',
        marginBottom: '20px',
      }} type="text" placeholder="Enter your website here" />
    </div>
  );
}

const style = {
  Container: {
    width: '100%',
  }
}

export default Website;