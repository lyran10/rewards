import React from 'react'
import { useColors } from '../customHooks/useColors'

export const UploadButton = () => {
    const {textColors, bgColors} = useColors()
  return (
      <div className={`flex gap-2 justify-center items-center font-semibold w-full text-[13px]`}>
        <div className='flex justify-center items-center flex-col gap-2'>
        <span className={`${bgColors.blue} ${textColors.white_smoke} px-4 py-1 rounded-md cursor-pointer`}>Browse</span>
        <span className={`text-[12px] ${textColors.grayish_blue}`}>(Supports png, jpg)</span>
        </div>
      </div>
  )
}
