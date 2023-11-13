import { PropsWithChildren } from "react";

interface LogoCircularFrameProps extends PropsWithChildren{
  width: string | number;
  src: string;
  alt: string;
  topOffset?: string | number;
  transform?: string;
}

export function LogoCircularFrame({width, src, alt, topOffset, transform}: LogoCircularFrameProps){
  const size = typeof width === "string" && width.endsWith("%") ? `${parseFloat(width)}vw` : width;
  return (
    <div style={{
      width: size, 
      height: size, 
      borderRadius: "50%", 
      backgroundColor: "#383838", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "flex-start", 
      overflow: "hidden"
    }}>
      <img src={src} alt={alt} style={{position: "relative", top: topOffset, transform: transform}}></img>
    </div>
  );
}