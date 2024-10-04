import React from "react"
import { Cards } from './cards'
import { OfferDetailsTable } from './offerDetailsTable'
import { useColors } from '../../../customHooks/useColors'

type Props = {
  data : {activeOffer: number, expiresIn2Days: number, expired: number, offerdetailsLists: any[]},
  loading : boolean
}

  export const DisplayOfferDetailsTable = ({data, loading} : Props) => {
   const {bgColors} = useColors()
  return (
    <div className={`relative h-full w-full md:w-[50%] lg:w-[50%] xl:w-[50%] flex-col rounded-md overflow-hidden flex gap-3 p-3 shadow-chart ${bgColors.white}`}>
    <span className='font-semibold text-[14px] self-start'>Offer Details</span>
    <Cards data={data}/>
    <OfferDetailsTable data={data && data.offerdetailsLists || []} loading={loading}/>
</div>
  )
}
