import { PropsWithChildren } from "react";

export function Card({children}:PropsWithChildren){
  return <div style={{backgroundColor:"#383838",borderRadius:"12px",minHeight:40, padding: "10px"}}>
 {children}
  </div>
}