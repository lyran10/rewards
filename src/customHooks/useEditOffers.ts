import React, { useEffect } from 'react'
import { InputTypes } from '../types/types'
import { useRedux } from './useRedux'
import { setStartDate } from '../store/reducer'
import { useSession } from './useSession'

type Props = {
    data : InputTypes
    setData : React.Dispatch<React.SetStateAction<InputTypes>>
}

export const useEditOffers = ({setData, data} : Props) => {
const {getOfferValues} = useSession()
const {dispatch, selector} = useRedux()
const {startDate} = selector(state => state.data)

    useEffect(() => {

        if(getOfferValues()){
            const {coupen_Code, offerDiscount, offerTitle, offer_StartTime, offer_EndTime, offerImgUrl, offerDesc, offerTerms, req_Points, offer_IsActive} = getOfferValues()
             dispatch(setStartDate(getOfferValues().offer_StartTime.split("T")[0]))

             setData({...data,
                CouponCode : coupen_Code,
                OfferDiscount : offerDiscount,
                OfferTitle : offerTitle,
                start_Date : offer_StartTime.split("T")[0],
                end_Date : offer_EndTime.split("T")[0],
                start_Time : offer_StartTime.split("T")[1],
                end_Time : offer_EndTime.split("T")[1],
                logo : offerImgUrl,
                Offer_Desc : offerDesc,
                Offer_terms : offerTerms,
                Req_Coins : `${req_Points}`,
                isActive : `${offer_IsActive}`
             })
        }
    },[])

  return 
}
