import React from 'react'
import { Button } from './button'
import { useColors } from '../customHooks/useColors'
import { IoCloseSharp } from "react-icons/io5";

type Props = {
    handlePopOverClose : () => void 
}

export const ClosePopOverButton = ({handlePopOverClose} : Props) => {
const {textColors, bgColors} = useColors()
  return (
    <Button id='closePopover' loaderClasses='' classes={`absolute top-0 right-0 text-[10px] md:text-[13px] lg:text-[15px] ${textColors.white_smoke} ${bgColors.blue} flex justify-center items-center gap-2 py-1 px-1`} handleClick={handlePopOverClose} icon={<IoCloseSharp size={25}/>}  content={""}/>
  )
}
