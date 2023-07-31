import React from 'react'
import "./Avatar.css";
const Avatar = ({children,backgroundColor,py, px, color,cursor, borderRadius, fontSize }) => {
const  style =
{
    backgroundColor,
    padding:`${py} ${px}`,
    color:color || "center",
    cursor:  cursor || "pointer",
    textAllign:"center",
    borderRadius,
    fontSize,
    TextDecoration:"none",
    display:"flex",
    justifyContent:"center",
    color:"black"
   
  }

return (
    <div style={style}>

      {children}

    </div>
  )
}

export default Avatar
