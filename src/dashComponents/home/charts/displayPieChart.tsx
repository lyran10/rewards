import React from "react"
import { PieChart } from './pieChart'
import { useColors } from '../../../customHooks/useColors'

type Props = {
  data : {redeemCount: number, claimCount: number}
}

export const DisplayPieChart = ({data} : Props) => {
    const {bgColors} = useColors()
  return (
<div className={`relative w-full md:w-[45%] lg:w-[40%] xl:w-[30%] h-auto flex justify-between items-center flex-col rounded-md shadow-chart p-3 ${bgColors.white}`}>
    <span className='font-semibold text-[14px] self-start'>Today's Status</span>
    <PieChart data={data}/>
</div>
  )
}
