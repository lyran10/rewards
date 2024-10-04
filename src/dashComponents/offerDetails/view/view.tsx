import React from 'react'
import { useRedux } from '../../../customHooks/useRedux'
import { Header } from '../../header'
import { ClosePopOverButton } from '../../../authComponents/closePopOverButton'
import { setViewData } from '../../../store/reducer'
import { Box } from './box'
import { convertTo12HourFormat } from '../offerDetails'
import { useColors } from '../../../customHooks/useColors'

export const View = () => {
    const {textColors} = useColors() 
const {selector, dispatch} = useRedux()
const { viewData, viewInfo } = selector(state => state.data)
const headers = [
    {
        id : "title",
        header : "Offer Title",
        span : "col-span-1",
        value : viewInfo ? viewInfo.offerTitle : ""
    },
    {
        id : "discount",
        header : "Discount Title",
        span : "col-span-1",
        value : viewInfo ? viewInfo.offerDiscount : ""
    },
    {
        id : "startDateTime",
        header : "Start Date Time",
        span : "col-span-1",
        value : viewInfo ? `${viewInfo.offer_StartTime.split("T")[0]} ${convertTo12HourFormat(viewInfo.offer_StartTime.split("T")[1])}` : ""
    },
    {
        id : "endDateTime",
        header : "End Date Time",
        span : "col-span-1",
        value : viewInfo ? `${viewInfo.offer_EndTime.split("T")[0]} ${convertTo12HourFormat(viewInfo.offer_EndTime.split("T")[1])}` : ""
    },
    {
        id : "redeem",
        header : "How To Redeem",
        span : "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2",
        value : viewInfo ? viewInfo.offerDesc : ""
    },
    {
        id : "conditions",
        header : "Terms & Conditions",
        span : "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2",
        value : viewInfo ? viewInfo.offerTerms : ""
    },
    {
        id : "couponCode",
        header : "Coupon Code",
        span : "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2",
        value : viewInfo ? viewInfo.coupen_Code : ""
    },
    {
        id : "coins",
        header : "Required Coins For This Offer",
        span : "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2",
        value : viewInfo ? viewInfo.req_Points : ""
    },
    {
        id : "status",
        header : "Status",
        span : "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2",
        value : viewInfo ? viewInfo.offer_IsActive ? "Active" : "Not Active" : ""
    },
    {
        id : "image",
        header : "Offer Image",
        span : "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-2",
        value : viewInfo ? viewInfo.offerImgUrl : ""
    },

]

const handleClick = (() => {
    dispatch(setViewData(false))
})
// border-r-none md:border-r-[2px] lg:border-r-[2px] xl:border-r-[2px]
  return (
    <div className={`overflow-y-scroll p-3 shadow-chart relative w-[90%] md:w-[90%] lg:w-[90%] xl:w-[80%] 2xl:w-[80%] h-[80%] bg-white rounded-md flex justify-start items-center flex-col gap-3 ${viewData ? "transition-opacity delay-75 opacity-[1]" : " opacity-0"} duration-300`}>
        <header className='self-start font-semibold px-0 md:px-3 lg:px-3 xl:px-7'>View Details</header>
        <div className='w-full h-full gap-7 md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0 flex flex-col md:flex-row lg:flex-row xl:flex-row '>
        <Box gridFlow='grid gap-7 grid-cols-2 justif-around items-start' padding='px-0 md:px-3 lg:px-3 xl:px-7' border='border-r-none md:border-r-[2px] lg:border-r-[2px] xl:border-r-[2px]'>
                {
                    headers.slice(0,6).map(({id, header, span, value}) => {
                        return(
                            <div key={id} className={`${span} flex flex-col gap-1`}>
                                <span className={`font-semibold text-[13px] ${textColors.grayish_blue}`}>{header}</span>
                                <span className={`font-semibold text-[#334155]`}> <div id="viewData" dangerouslySetInnerHTML={{ __html: value.toString() }} /></span>
                            </div>
                        )
                    })
                    }
        </Box>
        <Box gridFlow='grid gap-7 grid-cols-2 justif-start items-start' padding='px-0 md:px-3 lg:px-3 xl:px-7' border=''>
                {
                    headers.slice(6,headers.length).map(({id, header, span, value}) => {
                        return(
                            <div key={id} className={`${span} flex flex-col gap-1 relative`}>
                                <span className={`font-semibold text-[13px] ${textColors.grayish_blue}`}>{header}</span>
                                {
                                    id === "image"
                                    ?
                                    <img className='w-[80%] md:w-[60%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]' src={value as string} alt="" />
                                    :
                                    id === "status"
                                    ?
                                    <span className={`font-semibold ${value === "Active" ? textColors.green : textColors.red}`}>{value}</span>
                                    :
                                    <span className={`font-semibold text-[#334155]`}>{value}</span>
                                }
                            </div>
                        )
                    })
                }
        </Box>
        </div>
        <ClosePopOverButton handlePopOverClose={handleClick}/>
    </div>
  )
}


// {
//     headers.slice(0,6).map(({id, header, span, value}) => {
//         return(
//             <div key={id} className={`${span} flex flex-col gap-1`}>
//                 <span className={`font-semibold text-[13px] ${textColors.grayish_blue}`}>{header}</span>
//                 <span className={`font-semibold text-[15px] text-[#334155]`}>{value}</span>
//             </div>
//         )
//     })
// }
