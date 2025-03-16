import React from "react";
import TextArea from "@/components/TextArea";
import { px2rem } from "@/utils/commonUtils";

const Text = (props) => {

  const { handleInput } = props;

  return (
    <div style={style.Container}>
      <TextArea 
        style={{
          width: '100%',
          height: px2rem(90),
          border: '0px solid #D9D9D9',
          borderRadius: px2rem(4),
          padding: px2rem(10),
          boxSizing: 'border-box',
          boxShadow: `0 0 ${px2rem(20)} ${px2rem(4)} rgba(189,189,189, 0.1)`,
          fontSize: px2rem(16),
          color: '#8E8E8E',
          marginBottom: px2rem(20),
        }} 
        placeholder="Write your text here" 
        maxTextNumLimit={100}
        onInput={handleInput}
      />
    </div>
  );
}

const style = {
  Container: {
    width: '100%',
  }
}

export default Text;