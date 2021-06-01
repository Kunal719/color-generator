import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
  const[alert,setAlert]=useState(false);
  const bcg=rgb.join(","); //To convert rgb values into a string too change the background color
  const hex=rgbToHex(...rgb); //can use for getting hex values for color as well
  const hexValue=`#${hexColor}`;

  useEffect(()=>{
    const timeout=setTimeout(()=>{
     setAlert(false);
    },2000);
    return ()=>{clearTimeout(timeout)}
  },[alert])
  
  return <article className={`color ${index > 10 && "color-light"}`} style={{backgroundColor:`rgb(${bcg})`}}>
    <p className="percent-value">{weight}%</p>
    <p className="color-value" onClick={()=>{
      setAlert(true);
      navigator.clipboard.writeText(hexValue);
    }}>{hexValue}</p>
    {alert && <p className="alert">Copied to Clipboard</p>}
  </article> 
}

export default SingleColor
