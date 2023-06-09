import React from "react";

const VerticalLine = ({ color, height }) => {
  const lineStyle = {
    width: "5px",
    height: "66px",
    backgroundColor: color,
  };

  return <div style={lineStyle}></div>;
};

export default VerticalLine;
