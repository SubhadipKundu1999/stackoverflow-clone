import React from "react";

const Avatar = ({
  children,
  backgroundColor,
  px,
  py,
  color,
  borderRadius,
  fontSize,
  cursor,
  width,
  height
}) => {
  const style = {
    boxSizing: "border-box",
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none",
    width:width,
    height:height,
    overFlow:'hidden',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  };

  return <div style={style}>{children}</div>;
};

export default Avatar;