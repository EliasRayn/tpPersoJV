import { PropsWithChildren } from "react";

export function Card({children}:PropsWithChildren){
  return <div style={{backgroundColor:"darkgray",borderRadius:"12px",minHeight:40, padding: "10px"}}>
 {children}
  </div>
}