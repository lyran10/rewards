import React from 'react'
import { AddOffers } from './dashComponents/addOffers/addOffers'
import { ClaimOffers } from './dashComponents/claimOffers/claimOffers'
import { Home } from './dashComponents/home/home'
import { Main } from './dashComponents/main'
import { OfferDetails } from './dashComponents/offerDetails/offerDetails'
import { Profile } from './dashComponents/profile/profile'
import { RedeemOffers } from './dashComponents/redeemOffers/redeemOffers'
import { Auth } from './pages/auth'
import { Dashboard } from './pages/dashboard'
import {Route, Routes} from "react-router-dom"
// https://rewards.ictsbm.com/
// https://cdn.ckeditor.com/4.19.1/standard/ckeditor.js
// testuser
// test@123
const App = () => {
  return (
    // <Auth/>
    <Routes>
      <Route path='/' element={<Auth />}/>
      <Route path='/cms' element={<Dashboard  />} >
        <Route path='' element={<Main />} >
         <Route path='dashboard/home' element={<Home/>}/>   
          <Route path='offers/addOffers' element={<AddOffers/>}/>
          <Route path='offers/offerDetails' element={<OfferDetails/>}/>
          <Route path='redeem/redeemOffers' element={<RedeemOffers/>}/>
          <Route path='claim/claimOffers' element={<ClaimOffers/>}/>
          <Route path='profile/profileDetails' element={<Profile/>}/>
        </Route>
      </Route>

      {/* admin */}
      <Route path='/admin' element={<Auth />}/>
      <Route path='/admin/cms' element={<Dashboard/>} >
        <Route path='' element={<Main />} >
          <Route path='dashboard/home' element={<Home/>}/>   
          <Route path='offers/addOffers' element={<AddOffers/>}/>
          <Route path='offers/offerDetails' element={<OfferDetails/>}/>
          <Route path='redeem/redeemOffers' element={<RedeemOffers/>}/>
          <Route path='claim/claimOffers' element={<ClaimOffers/>}/>
          <Route path='profile/profileDetails' element={<Profile/>}/>
        </Route>
      </Route>
      
    </Routes>
  
  )
}

export default App
