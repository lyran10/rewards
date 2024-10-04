import React from 'react'
import { useColors } from '../../customHooks/useColors'
import { useClick } from '../../customHooks/useClick'
import { Button } from '../../authComponents/button'
import { useRedux } from '../../customHooks/useRedux'
import { setLogoutPopup } from '../../store/reducer'
import { useCloseDiv } from '../../customHooks/useCloseDiv'

export const ConfirmLogout = () => {
    const {textColors, bgColors} = useColors()
    const {selector, dispatch} = useRedux()
    const {logoutPopup} = selector(state => state.data)
    const {logout} = useClick()
    // const {divRef} = useCloseDiv({show: logoutPopup, setLogoutConfirm : setLogoutPopup})
    

  return (
    <div className={`${bgColors.white} ${textColors.slate800} p-2 text-[14px] w-[130px] shadow-chart flex flex-col gap-2 justify-center items-center rounded-md  absolute top-0 right-[130%] duration-150 ${logoutPopup ? "translate-y-0 z-[10000] opacity-[1]" : "-translate-y-3 z-[-1] opacity-0"}`}>
      <span>Are you sure ?</span>
      <div className='flex gap-3 justify-center items-center'>
      <Button id='logout' loaderClasses='' classes={`text-[11px] ${textColors.blue} ${bgColors.white_smoke} flex justify-center items-center gap-2 py-1 px-1 shadow-chart rounded-md`} handleClick={logout} icon={<></>}  content={"Yes"}/>
      <Button id='logout' loaderClasses='' classes={`text-[11px] ${textColors.blue} ${bgColors.white_smoke} flex justify-center items-center gap-2 py-1 px-1 shadow-chart rounded-md`} handleClick={() => dispatch(setLogoutPopup(false))} icon={<></>}  content={"No"}/>
      <div className='w-2 h-2 bg-white absolute left-[96%] rotate-45 top-3'></div>
      </div>
    </div>
  )
}
