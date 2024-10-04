import React from 'react'
import { AuthMain } from '../authComponents/authMain'
import { useColors } from '../customHooks/useColors'
import { Bubbles } from '../authComponents/bubbles'
import { Icons } from '../authComponents/icons'
import { useRedirectIfLoggedIn } from '../customHooks/useRedirectIfLoggedIn'

export const Auth = () => {
  const {bgColors : { white_smoke }} = useColors()
  useRedirectIfLoggedIn()
  return (
    <main className={`loginContainer bg-[#f3e8ff] h-screen w-full flex justify-center items-center ${white_smoke}`}>
      <Bubbles/>
      <Icons/>
      {/* <Navbar/> */}
      <AuthMain/>
    </main>
   
  )
}
