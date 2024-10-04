import { InputTypes } from '../types/types'
import { LENGTHS } from '../types/constants'

export const useValidation = () => {
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.]*$/
  const nameRegex = /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,. ]*$/
  const lettersAndNumbersRegex = /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,. ]*$/
  const lettersOnly = /^[A-Za-z]+$/;

    const loginValidation = (data : InputTypes) => {
        const {userName, password} = data
        if(!userName || !password) return false
        if(password.length < LENGTHS.PASS_MIN_LENGTH) return "less then min"
        return true // if there is data return true
      }

    const registrationValidation = (data : InputTypes) => {
        const {name, userName, password, confirmPassword, address, mobileNo, pinCode, catId,stateid, appid, disid, divid, logo, draggedImage} = data
        if(!name || !userName || !password || !confirmPassword || !address || !mobileNo || !pinCode || !catId || !stateid || !appid || !divid || !disid || (!logo && !draggedImage)) return false
        if(password !== confirmPassword) return "noMatch"
        return true // if there is data return true
      }

    const addOffersValidation = (data : InputTypes) => {
      const { OfferDiscount, OfferTitle, Offer_Desc, Offer_terms, Req_Coins, end_Date, end_Time, start_Date, start_Time,draggedImage,logo, isActive} = data
      if(!OfferDiscount || !OfferTitle || !Offer_Desc || !Offer_terms || !Req_Coins || !end_Date || !end_Time || !start_Date || !start_Time || !isActive || (!logo && !draggedImage)) return false
      return true // if there is data return true
    }

    const name_username_password_confirmPasswordValidation = (inputValue : any, name : string, data : InputTypes) => {
      if(name === "name" || name === "userName" || name === "password" || name === "confirmPassword"){

        if(name === "name" && inputValue.length === 1 && nameRegex.test(inputValue) ){ return false } 
        else{ if(name === "name" && inputValue.length > 1 && !lettersAndNumbersRegex.test(inputValue)) return false }

        if((name === "password" || name === "confirmPassword") && !passwordRegex.test(inputValue)) return false
        if((name !== "password" && name !== "confirmPassword" && name !== "name")  && !data[name as keyof InputTypes] && !lettersOnly.test(inputValue)) return false
        if ((name !== "password" && name !== "confirmPassword" && name !== "name") &&  inputValue !== "" && !lettersOnly.test(inputValue)) return false
    }
    } 

    const dateFilterValidation = (data : InputTypes) => {
      const { end_Date, start_Date } = data
      if(!end_Date || !start_Date) return false
      return true // if there is data return true
    }

  return {
 loginValidation,
 registrationValidation,
 addOffersValidation,
 name_username_password_confirmPasswordValidation,
 dateFilterValidation
}
}
