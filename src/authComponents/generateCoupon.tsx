import React from 'react'
import { Button } from './button'
import { useClick } from '../customHooks/useClick'
import { useColors } from '../customHooks/useColors'
import { InputTypes } from '../types/types'

type Props = {
    data : InputTypes
    setData : React.Dispatch<React.SetStateAction<InputTypes>>
}

export const GenerateCoupon = ({data, setData} : Props) => {
const { generateCoupon } = useClick()
const {bgColors, textColors} = useColors()
  return (
    <Button id='generateCoupon' loaderClasses='w-5 h-5 before:w-6 before:h-6'  classes={`absolute bottom-0 right-0 text-[12px] ${textColors.white_smoke} ${bgColors.blue} flex justify-center items-center gap-2 py-1 px-3 rounded-md`} handleClick={(e : React.FormEvent) => generateCoupon(e, data, setData)} icon={<></>}  content={"Generate"}/>
  )
}
