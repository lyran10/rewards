import React,{ useEffect } from 'react'
import { InputTypes } from '../types/types'
import { useRedux } from './useRedux'
import { setInputError } from '../store/reducer'

type Props = {
    data : InputTypes
    setData : React.Dispatch<React.SetStateAction<InputTypes>>
}

export const useResetData = ({data, setData} : Props) => {
const {selector, dispatch} = useRedux()
const { msg } = selector(state => state.apiData)
const { param } = selector(state => state.data)

useEffect(() => {

    if(msg.status === "success" || param === "addOffers"){
      dispatch(setInputError(false))
      setData({
      // registration
      name : "", 
      userName : "",
      password : "", 
      confirmPassword : "", 
      address : "", 
      mobileNo : "", 
      pinCode : "", 
      catId : "", 
      logo : "", 
      latitude : data.latitude, 
      longitude : data.longitude,
      disid : "",
      divid : "",
      appid : "",
      stateid : "",
      // add offers
      OfferTitle : "",
      OfferDiscount : "",
      Req_Coins : "",
      start_Date : "",
      end_Date : "",
      start_Time : "",
      end_Time : "",
      Offer_Desc : "",
      Offer_terms : "",
      draggedImage : "",
      CouponCode : "",
      isActive : `true`
    } as InputTypes)
    } 
},[msg, param])

const handleResetData = (setData : React.Dispatch<React.SetStateAction<InputTypes>>) => {
  setData({
    // registration
    name : "", 
    userName : "",
    password : "", 
    confirmPassword : "", 
    address : "", 
    mobileNo : "", 
    pinCode : "", 
    catId : "", 
    logo : "", 
    latitude : data.latitude, 
    longitude : data.longitude,
    // add offers
    OfferTitle : "",
    OfferDiscount : "",
    Req_Coins : "",
    start_Date : "",
    end_Date : "",
    start_Time : "",
    end_Time : "",
    Offer_Desc : "",
    Offer_terms : "",
    draggedImage : "",
    CouponCode : "",
    disid : "",
    divid : "",
    appid : "",
    stateid : ""
  } as InputTypes)
}

  return {handleResetData}
}
