import React from 'react'
import { InputTypes } from '../types/types';
import { useLengthLimit } from './useLengthLimit';
import { useRedux } from './useRedux';
import { setStartDate } from '../store/reducer';

type Props = {
    handleChange : (e : React.ChangeEvent<HTMLInputElement>) => void,
    data : InputTypes,
    setData : React.Dispatch<React.SetStateAction<InputTypes>>
}

export const useCheckLimitAndLettersValidation = ({handleChange, data, setData} : Props) => {
    const {dispatch} = useRedux()
    const { checkLimit } = useLengthLimit()

    const Validation = (e : React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const lettersOnly = /^[A-Za-z]+$/;
        const lettersAndNumbersOnly = /^[a-zA-Z0-9]*$/
        const floatsAndNumbersOnly = /^[0-9\.]*$/;
        const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.]*$/
        const nameRegex = /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,. ]*$/
        const lettersAndNumbersRegex = /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,. ]*$/

        if(e.currentTarget.name === "start_Date"){ dispatch(setStartDate(inputValue)) } 

        if(!checkLimit(e)) return false

        if(e.currentTarget.name === "name" || e.currentTarget.name === "userName" || e.currentTarget.name === "password" || e.currentTarget.name === "confirmPassword"){
            if(e.currentTarget.name === "name" && inputValue.length === 1 && nameRegex.test(inputValue) ){ return } 
            else{ if(e.currentTarget.name === "name" && inputValue.length > 1 && !lettersAndNumbersRegex.test(inputValue)) return }
            if((e.currentTarget.name === "password" || e.currentTarget.name === "confirmPassword") && !passwordRegex.test(inputValue)) return
            if((e.currentTarget.name !== "password" && e.currentTarget.name !== "confirmPassword" && e.currentTarget.name !== "name")  && !data[e.currentTarget.name as keyof InputTypes] && !lettersOnly.test(inputValue)) return
            if ((e.currentTarget.name !== "password" && e.currentTarget.name !== "confirmPassword" && e.currentTarget.name !== "name") &&  inputValue !== "" && !lettersOnly.test(inputValue)) return
        }

            if((e.currentTarget.name === "OfferTitle" || e.currentTarget.name === "OfferDiscount" || e.currentTarget.name === "Offer_terms" || e.currentTarget.name === "Offer_Desc" ) && inputValue.length === 1 && nameRegex.test(inputValue) ){ return }
            if((e.currentTarget.name === "CouponCode") && !lettersAndNumbersOnly.test(inputValue) ) return 

            if(e.currentTarget.name === "Req_Coins" && !floatsAndNumbersOnly.test(inputValue) ) return
            else {if(e.currentTarget.name === "Req_Coins" && inputValue.split("").filter(item => item === ".").length > 1) return}

        if(e.currentTarget.name === "logo"){
            const file = e.target.files?.[0];
            if(file){
                const fileSizeInKB = file.size / 1024;

                // if (fileSizeInKB < 30 || fileSizeInKB > 50) {
                //     dispatch(setMsg({status : "error", content : "File size must be between 30KB and 50KB!"}))
                //     return
                // }else{
                    setData({...data, [e.currentTarget.name] : file, draggedImage : ""})
                    return
                // }
            }
          
        }

        handleChange(e)
      }

  return { Validation } 
}