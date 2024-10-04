import React from "react"
import { Navbar } from '../dashComponents/navbar/navbar'
import { Outlet } from 'react-router-dom'
import { Toast } from '../commonComponents/toast'
import { useRedirectIfNotLoggedIn } from '../customHooks/useRedirectIfNotLoggedIn'
import { PopOver } from '../commonComponents/popOver'
import { useRedux } from '../customHooks/useRedux'
import { useLocation } from 'react-router-dom'
import { NoOfferPopup } from '../dashComponents/offerDetails/noOfferPopup'
import { View } from '../dashComponents/offerDetails/view/view'
import { ConfirmClaim } from '../dashComponents/redeemOffers/confirmClaim'

export const Dashboard = () => {
  const location = useLocation()
  const {selector} = useRedux()
  const {noOffer, viewData, confirmClaim, pageId} = selector(state => state.data)
  useRedirectIfNotLoggedIn()

  return (
    <main className={`relative ${ pageId === "dashboard" ? "h-auto" : "h-screen"} md:h-screen lg:h-screen xl:h-screen w-full bg-[#f3e8ff] overflow-hidden`}>
        <Navbar/>
        <Outlet />
        <Toast/>

        <PopOver width='w-full' bg={`bg-[rgba(255,255,255,.8)]`} animation={`${noOffer ? "translate-y-0 transition-opacity delay-50 opacity-[1]" : "translate-y-[1000px] transition-translate delay-300 opacity-0"} duration-300`}>
          <NoOfferPopup/>
        </PopOver>

        <PopOver width='w-full' bg={`bg-[rgba(255,255,255,.8)]`} animation={`${viewData ? "translate-y-0 transition-opacity delay-50 opacity-[1]" : "translate-y-[1000px] transition-translate delay-300 opacity-0"} duration-300`}>
          <View/>
        </PopOver>

        <PopOver width='w-full' bg={`bg-[rgba(255,255,255,.8)]`} animation={`${confirmClaim ? "translate-y-0 transition-opacity delay-50 opacity-[1]" : "translate-y-[1000px] transition-translate delay-300 opacity-0"} duration-300`}>
          <ConfirmClaim/>
        </PopOver>
    </main>
  )
}
