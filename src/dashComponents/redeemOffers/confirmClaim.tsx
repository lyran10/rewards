import React from 'react'
import { Button } from '../../authComponents/button'
import { useColors } from '../../customHooks/useColors'
import { useRedux } from '../../customHooks/useRedux'
import { setConfirmClaim } from '../../store/reducer'
import { useClick } from '../../customHooks/useClick'

export const ConfirmClaim = () => {
    const {dispatch, selector} = useRedux()
    const {confirmClaim, claimInfo} = selector(state => state.data)
    const {claim} = useClick()
    const {textColors, bgColors} = useColors()

  return (
    <div className={`shadow-chart relative w-[300px] h-[200px] bg-white rounded-md flex justify-center items-center flex-col gap-10 ${confirmClaim ? "transition-opacity delay-75 opacity-[1]" : " opacity-0"} duration-300`}>
    <span className='font-semibold'>Are you sure you want to claim?</span>
    <div className='flex gap-3'>
    <Button id='confirm' loaderClasses='w-5 h-5 before:w-6 before:h-6'  classes={`${textColors.white_smoke} ${bgColors.blue} py-2 px-3 flex justify-center items-center gap-2 rounded-md`} handleClick={() => claim(claimInfo)} icon={<></>}  content={"Yes"}/>
    <Button id='noConfirm' loaderClasses=''  classes={`${textColors.white_smoke} ${bgColors.blue} py-2 px-3 flex justify-center items-center gap-2 rounded-md`} handleClick={() => dispatch(setConfirmClaim(false))} icon={<></>}  content={"No"}/>
    </div>
  </div>
  )
}
