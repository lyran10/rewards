import React from 'react'

type Props = {
    icon : JSX.Element,
    content : string,
    classes : string
}

export const NoData = ({icon, content, classes} : Props) => {
  return (
    <div className={` ${classes} flex justify-center items-center flex-col  m-auto text-[12px] font-semibold`}>
    {icon}
    <span className=''>{content}</span>
    </div>
  )
}
