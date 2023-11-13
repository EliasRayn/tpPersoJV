import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren{
  width?: string | number;
  height?: string | number;
}
export function Card({children, width, height}: CardProps){
  return <div style={{backgroundColor:"#383838",borderRadius:"12px",minHeight:40, padding: "10px", width: width, height: height}}>
 {children}
  </div>
}