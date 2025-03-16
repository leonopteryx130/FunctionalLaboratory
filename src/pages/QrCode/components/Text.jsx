import React from "react";
import TextArea from "@/components/TextArea";

const Text = (props) => {

  const { handleInput } = props;

  return (
    <div style={style.Container}>
      <TextArea 
        style={{
          width: '100%',
          height: '90px',
          border: '0px solid #D9D9D9',
          borderRadius: '4px',
          padding: '10px',
          boxSizing: 'border-box',
          boxShadow: '0 0 20px 4px rgba(189,189,189, 0.1)',
          fontSize: '16px',
          color: '#8E8E8E',
          marginBottom: '20px',
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