import React from 'react'
import { Avatar } from '../../commonComponents/avatar'
import { Button } from '../button'
import { FaUserPlus } from "react-icons/fa6";
import { useColors } from '../../customHooks/useColors';
import { InputTypes } from '../../types/types';
import { useRedux } from '../../customHooks/useRedux';
import { setInputError, toggleLogin } from '../../store/reducer';

type Props = {
    data :InputTypes
    setData : React.Dispatch<React.SetStateAction<InputTypes>>
}

export const SignUpButton = ({data, setData} :Props) => {
    const {dispatch} = useRedux()
    const {textColors} = useColors()

    const handleToggle = () => {
        setData({userName : "", password : "", latitude : data.latitude, longitude : data.longitude} as InputTypes)
        dispatch(toggleLogin(false))
        dispatch(setInputError(false))
      }

  return (
    <div className="flex justify-center items-center gap-2">
      <Avatar text='text-[#94a3b8]' bg="" position="" width="w-9" height="h-9" icon={<FaUserPlus/>} shadow='shadow-chart'/>
      <Button id="toReg" loaderClasses='' classes={`font-semibold text-[10px] md:text-[12px] lg:text-[13px] ${textColors.blue}`} handleClick={handleToggle} icon={<></>}  content={"Sign Up"}/>
    </div>
  )
}
