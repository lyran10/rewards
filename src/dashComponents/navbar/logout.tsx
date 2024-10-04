import React from "react"
import { Button } from '../../authComponents/button'
import { useClick } from '../../customHooks/useClick'
import { useColors } from '../../customHooks/useColors'
import { FaPowerOff } from "react-icons/fa";
import { useRedux } from '../../customHooks/useRedux';
import { setLogoutPopup } from '../../store/reducer';
import { ConfirmLogout } from './confirmLogout';
import { useCloseDiv } from '../../customHooks/useCloseDiv';

export const Logout = () => {
const {bgColors, textColors} = useColors()
const {dispatch, selector} = useRedux()
const {logoutPopup} = selector(state => state.data)
const {divRef} = useCloseDiv({show: logoutPopup, setLogoutConfirm : setLogoutPopup})


  return (
    <div ref={divRef} className='relative'>
       <Button id='logout' loaderClasses='' classes={`text-[10px] md:text-[13px] lg:text-[15px] ${textColors.blue} ${bgColors.white_smoke} flex justify-center items-center gap-2 py-3 px-3 shadow-chart rounded-md`} handleClick={() => dispatch(setLogoutPopup(!logoutPopup ? true : false))} icon={<FaPowerOff/>}  content={""}/>
       <ConfirmLogout/>
    </div>
   
  )
}
