import React from 'react'
import { useColors } from '../customHooks/useColors'
import { Button } from './button'

type Props = {
  data : any,
  handleClick : (e :React.FormEvent) => void
}

export const UploadedFileName = ({data, handleClick} : Props) => {
  const { textColors, bgColors } = useColors()
  return (
    <>
      { data ?  <Button id="viewImage" loaderClasses='' classes={`absolute top-[115%] font-semibold text-[10px] md:text-[12px] lg:text-[11px] ${textColors.blue} ${bgColors.white_smoke} py-1 px-2`} handleClick={handleClick} icon={<></>}  content={"View uploaded Image"}/> : null }
    </>
  )
}
