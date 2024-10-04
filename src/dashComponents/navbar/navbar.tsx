import React from "react"
import { useColors } from '../../customHooks/useColors'
import { useSession } from '../../customHooks/useSession'
import { List } from './list'
import { Logout } from './logout'

export const Navbar = () => {
const {getValue} = useSession()
const { bgColors , textColors } = useColors()

  return (
    <nav className={`w-full ${textColors.cyan950} shadow-chart`}>
      <div className={`h-[50px] w-full px-5 flex justify-between items-center ${bgColors.blue} ${textColors.white_smoke} font-semibold`}>
        <span className='tracking-wide'>CitizenCMS</span>
        <div className='font-semibold flex gap-5 justify-center items-center text-[13px]'>
          <span>{getValue() !== null ? getValue().name ? getValue().name : getValue().aName : ""}</span>
          <Logout />
        </div>
      </div>
      <div className={`h-[50px] w-full pl-5 bg-white ${bgColors.white}`}>
        <List/>
      </div>
    </nav>
  )
}
