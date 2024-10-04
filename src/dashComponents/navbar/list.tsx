import React from "react"
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRedux } from "../../customHooks/useRedux";
import { setInputError, setPageId, setParam, setStartDate } from "../../store/reducer";
import { useSession } from "../../customHooks/useSession";

export const List = () => {
const { getOfferValues, removeOfferValues } = useSession()
const navigate = useNavigate()
const {dispatch} = useRedux()
const items = [
    {   
        id : "dashboard",
        content : "Dashboard",
        navigate : "dashboard/home",
        subItems : [],
        subContent : "Home"
    },
    {   
        id : "offers",
        content : "Offers",
        navigate : "offers",
        subItems : [
            {
            id : "addOffers",
            content : "Add Offers",
            subnavigate : "offers/addOffers",
            },
            {
            id : "OfferDetails",
            content : "Offer Details",
            headerContent : "Offers",
            subnavigate : "offers/offerDetails",
            }
        ]
    },
    {   
        id : "redeem",
        content : "Redeem",
        navigate : "redeem",
        subItems : [
            {
            id : "redeemOffers",
            content : "Redeem Offers",
            subnavigate : "redeem/redeemOffers",
            },
        ]
    },
    {   
        id : "claim",
        content : "Claim",
        navigate : "claim",
        subItems : [
            {
                id : "claimOffers",
                content : "Claim Offers",
                subnavigate : "claim/claimOffers",
            },
        ]
    },
    {   
        id : "profile",
        content : "Profile",
        navigate : "profile",
        subItems : [
            {
                id : "profileDetails",
                content : "Profile Details",
                subnavigate : "profile/profileDetails",
            },
        ]
    },
]

const handleClick = (navi : string, id : string) => {

    if(getOfferValues() && navi.split("/")[1] === "addOffers"){
        dispatch(setParam(navi.split("/")[1]))
    }else dispatch(setParam(null))

    // dispatch(setEditOffer(null))
    removeOfferValues()
    dispatch(setStartDate(null))
    dispatch(setInputError(false))
    navigate(navi)
    dispatch(setPageId(id))
}

  return (
    <ul className='w-full h-full flex justify-start items-center text-[10px] md:text-[13px] lg:text-[13px] font-semibold'>
        {
            items.map(({id, content, subItems, navigate}, index) => {
                return(
                    <li onClick={() => id === "dashboard" ? handleClick(navigate, id) : null} className={`h-full p-5 ${index === items.length - 1 ? "" : "border-r"} group relative flex justify-start items-center gap-1 cursor-pointer`} id={id} key={id}>
                       <span>{content}</span> 
                       {
                        subItems.length ? <IoMdArrowDropdown className='text-[rgb(195,195,195)]' size={20}/> : null
                       }
                       
                       {
                            subItems.length
                            ?
                            <ul className={`flex justify-start items-center gap-1 flex-col p-1 w-[130px] absolute opacity-0 z-[-1] translate-y-3 group-hover:z-[10000] group-hover:translate-y-0 group-hover:opacity-[1] duration-150  bg-white shadow-chart top-[100%] before:absolute before:content-"" before:bg-white before:w-2 before:h-2 ${id === "offers" ? "before:bottom-[95%]" : "before:bottom-[90%]"} before:left-5 before:rotate-45`}>
                                {
                                    subItems.map(({ id, content, subnavigate}, index) => {
                                        return(
                                            <li onClick={() => handleClick(subnavigate, id)} id={id} className={`cursor-pointer w-full p-2 ${index === subItems.length - 1 ? "" : "border-b-[1px]"}`} key={id}>{content}</li>
                                        )
                                    })
                                }
                            </ul>
                            :
                            null
                       }
                    </li>
                )
            })
        }
    </ul>
  )
}
