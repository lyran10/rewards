import React from 'react'
import { Toast } from '../commonComponents/toast'
import { useColors } from '../customHooks/useColors'
import { useMouseFollower } from '../customHooks/useMouseFollower'
import { useRedux } from '../customHooks/useRedux'
import { Login } from './login/login'
import { Registration } from './registration/registration'

export const AuthMain = () => {
    const { selector } = useRedux() 
    const { login } = selector(state => state.loginData)
    const { transform } = useMouseFollower({num : 10})
    const {bgColors : { purple, slate900, white }, textColors : {slate800 }} = useColors()
    
  return (
    <div className={`absolute flex justify-center items-center w-full h-full`}>
      <div className={`relative duration-500 flex ${login ? "translate-x-0 scale-100" : "-translate-x-[500px] scale-0"} justify-end items-center p-3 w-[80%] h-[60%] ${white} shadow-chart bg-rewards`}>
      <div
          style={{
            transform,
            transition: 'transform 0.1s ease-in-out',
          }}
         className={`absolute left-[3%] -top-10 w-[50%] h-[120%] ${purple} shadow-chart hidden md:block lg:block`}>
          <img
           src="./rewards.png" className='w-full h-full' alt="" />
        </div>
        <Login/>
      </div>
      <Registration/>
      <Toast/>
    </div>
  )
}
