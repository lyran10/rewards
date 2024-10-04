import React from 'react'
import { useColors } from '../../customHooks/useColors'
import { useSession } from '../../customHooks/useSession'
import { Box } from '../offerDetails/view/box'

export const Profile = () => {
const {getValue} = useSession()
const {bgColors, textColors} = useColors()
const headers = [
    {
        id : "name",
        header : "Name",
        span : "col-span-1",
        value : getValue() && getValue().name || getValue() && getValue().aName || ""
    },
    {
        id : "mobNo",
        header : "Mobile no",
        span : "col-span-1",
        value : getValue() && getValue().contactNo || ''
    },
    {
        id : "address",
        header : "Address",
        span : "col-span-1",
        value : getValue() && getValue().address || ""
    },
    {
        id : "image",
        header : "Offer Image",
        span : "col-span-1",
        value : getValue() && getValue().logo_Url || ""
    },

]
// border-r-none md:border-r-[2px] lg:border-r-[2px] xl:border-r-[2px]
  return (
   <section className={`rounded-md relative w-full h-full mt-[250px] md:mt-0 lg:mt-0 xl:mt-0 shadow-chart px-5 py-3 flex flex-col justify-start items-center gap-3 ${bgColors.white}`}>
     <header className='font-semibold text-[15px] self-start'>Profile Details</header>
     <div className='flex w-full h-full'>
     <Box gridFlow='w-full gap-5 grid grid-cols-2 justif-start items-start' padding='px-0 md:px-3 lg:px-3 xl:px-7' border=''>
                {
                    headers.slice(0,6).map(({id, header, span, value}) => {
                        return(
                            <div key={id} className={`${span} flex flex-col gap-1`}>
                                <span className={`font-semibold text-[13px] ${textColors.grayish_blue}`}>{header}</span>
                                {
                                    id === "image"
                                    ?
                                    <img className='w-[80%]' src={value as string} alt="" />
                                    :
                                    id === "status"
                                    ?
                                    <span className={`font-semibold  ${value === "Active" ? textColors.green : textColors.red}`}>{value}</span>
                                    :
                                    <span className={`font-semibold text-[#334155]`}>{value}</span>
                                }
                            </div>
                        )
                    })
                    }
        </Box>
        {/* <Box gridFlow='h-full md:h-[100%] lg:h-[100%] xl:h-[100%] 2xl:h-[80%] grid grid-cols-2 justif-start items-start' padding='px-0 md:px-3 lg:px-3 xl:px-7' border=''>
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
                                    <span className={`font-semibold text-[17px] ${value === "Active" ? textColors.green : textColors.red}`}>{value}</span>
                                    :
                                    <span className={`font-semibold text-[17px] text-[#334155]`}>{value}</span>
                                }
                            </div>
                        )
                    })
                }
        </Box> */}
     </div>
    
   </section>
  )
}
