import React from 'react';

const ColoredDot = ({ color }) => {
  const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: color,
  };

  return <div style={dotStyle}></div>;
};

export default ColoredDot;
