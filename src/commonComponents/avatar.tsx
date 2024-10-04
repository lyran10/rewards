import React from "react"

type Props = {
    bg : string,
    position : string,
    width : string,
    height : string,
    icon : JSX.Element,
    text? : string,
    shadow? : string
  }
  
  export const Avatar = ({bg, position,width,height,icon,text, shadow} : Props) => {
    return (
      <div className={`flex justify-center items-center ${text} ${width} ${height} rounded-full ${bg} ${position} bottom-[80%] ${shadow}`}>
        {icon}
      </div>
    )
  }