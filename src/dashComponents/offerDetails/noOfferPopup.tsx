import React from 'react'
import { Button } from '../../authComponents/button'
import { useColors } from '../../customHooks/useColors'
import { useRedux } from '../../customHooks/useRedux'
import { setNoOffer } from '../../store/reducer'

export const NoOfferPopup = () => {
const {selector, dispatch} = useRedux()
const {noOffer} = selector(state => state.data)
const {textColors, bgColors} = useColors()
  return (
    <div className={`shadow-chart relative w-[300px] h-[200px] bg-white rounded-md flex justify-center items-center flex-col gap-3 ${noOffer ? "transition-opacity delay-75 opacity-[1]" : " opacity-0"} duration-300`}>
    <span className='font-semibold'>Offer is Closed.</span>
    <Button id='view' loaderClasses=''  classes={`${textColors.white_smoke} ${bgColors.blue} py-2 px-3 flex justify-center items-center gap-2 rounded-md`} handleClick={() => dispatch(setNoOffer(false))} icon={<></>}  content={"Back"}/>
  </div>
  )
}
