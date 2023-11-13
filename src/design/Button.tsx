
import { PropsWithChildren } from "react";

export function Button({children}: PropsWithChildren){
  return <button style={{backgroundColor:"#D9D9D9",borderRadius:"12px",minHeight:40, padding: "10px"}}>
 {children}
  </button>
}