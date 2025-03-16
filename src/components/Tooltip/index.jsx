import React from "react";

export const Tooltip = (props) => {
  const { children, text, position } = props;
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  }

  return (
    <div 
      style={{ 
        position: 'relative',
        display: 'inline-block',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {
        showTooltip && (
          <div style={{
            position: 'absolute',
            top: position === 'top' ? '-30px' : '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px',
            background: 'rgba(0, 0, 0, 0.6)',
            color: '#fff',
            borderRadius: '4px',
            fontSize: '14px',
          }}>
            {text}
          </div>
        )
      }
    </div>
  );
}