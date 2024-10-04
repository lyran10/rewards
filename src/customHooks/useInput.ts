import React,{ useState, useEffect } from 'react'
import { InputTypes } from '../types/types'
import { useRedux } from './useRedux'

export const UseInput = ()  => {
const { selector } = useRedux()
const { coords : {lat, lon} } = selector(state => state.loginData)
const [data,setData] = useState({
    name : "",
    userName : "", 
    password : "", 
    confirmPassword : "", 
    CouponCode : "", 
    Req_Coins : "", 
    isActive : `true`,
    mobileNo : "",
    address : "",
    pinCode : "",
    latitude : lat,
    longitude : lon,
    catId : "",
    logo : "",
    disid : "",
    divid : '',
    appid : "",
    stateid : "",

    // add offers
    OfferTitle : "",
    OfferDiscount : "",
    start_Date : "",
    end_Date : "",
    start_Time : "",
    end_Time : "",
    Offer_Desc : "",
    Offer_terms : "",
    draggedImage : "",

    // offer detail
    search : ""
} as InputTypes) // create a state

useEffect(() => {
    setData({...data, latitude : lat, longitude : lon})
},[lat, lon])

const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) =>{
    setData({...data,[e.currentTarget.name] : e.currentTarget.value}) // handle the change event 
}  

return {data, handleChange, setData} // return date and handle change function
}
