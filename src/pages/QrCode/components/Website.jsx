import React from "react";
import Input from "@/components/Input";
import { px2rem } from "@/utils/commonUtils";

const Website = (props) => {

  const { handleInput } = props;

  return (
    <div style={style.Container}>
      <p style={{
        fontSize: px2rem(14),
        marginBottom: px2rem(10),
      }}>
        Please enter the website you want to generate the QR code for
      </p>
      <Input style={{
        width: '100%',
        height: px2rem(40),
        border: '0px solid #D9D9D9',
        borderRadius: px2rem(4),
        padding: `0 ${px2rem(10)}`,
        boxSizing: 'border-box',
        boxShadow: `0 0 ${px2rem(20)} ${px2rem(4)} rgba(189,189,189, 0.1)`,
        fontSize: px2rem(16),
        color: '#8E8E8E',
        marginBottom: px2rem(20),
      }} type="text" placeholder="Enter your website here" onInput={handleInput} />
    </div>
  );
}

const style = {
  Container: {
    width: '100%',
  }
}

export default Website;