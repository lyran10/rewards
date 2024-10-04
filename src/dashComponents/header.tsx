import React from "react"
import { useColors } from '../customHooks/useColors'
import { useRedux } from '../customHooks/useRedux'
import { useSetHeader } from '../customHooks/useSetHeader'

export const Header = () => {
const { selector } = useRedux()
const { header, subHeader } = selector(state => state.data)
const { textColors } = useColors()
useSetHeader()

  return (
    <div className='flex gap-1 flex-col w-full'>
        <header className='font-semibold text-[15px]'>{ header }</header>
        <header className='font-semibold text-[11px] text-[#94a3b8]'><span className={`${textColors.blue}`}>{ header }</span> {">"} { subHeader }</header>
    </div>
    
  )
}
