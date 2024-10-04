import React from "react"
import { MonthBarChart } from './monthBarChart'
import { useColors } from '../../../customHooks/useColors'
import { sum } from './displayWeekBarChart'
import { Loader } from '../../../commonComponents/loader'
import { FaChartSimple } from "react-icons/fa6";
import { NoData } from '../noData';

type Props = {
    loader : boolean
    BarChartColor : string,
    header : string,
    content : string
    data :  {redeemDayName: string, redeemDate: string, redeemCount: number}[] | {claimDayName: string, claimDate: string, claimCount: number}[] | undefined
    keys : {name : string, date : string, count : string}
}

export const DisplayTotalMonthChart = ({loader, header, BarChartColor, data, keys, content} : Props) => {
const {bgColors, textColors} = useColors()

  return (
    <div className='overflow-hidden w-full md:w-[50%] lg:w-[50%] xl:w-[50%] h-full flex justify-center items-center gap-3 flex-col'>
    <div className={`h-full w-full shadow-chart rounded-md flex ${bgColors.white}`}>
        <div className='w-[40%] p-3 flex flex-col h-full'>
            <span className='font-semibold text-[14px] self-start'>{header}</span>
            <span className='font-semibold text-[40px]'>{sum(data, keys)}</span>
            <span className={`font-semibold text-[14px] md:text-[9px] lg:text-[12px] xl:text-[14px] ${textColors.grayish_blue}`}>{content}</span>      
        </div>
        <div className='relative w-[60%] h-full justify-between self-end p-3 flex flex-col gap-2'>
            <div className='w-full h-full justify-between self-center flex flex-col gap-2'>
            <span className={`static md:absolute lg:absolute xl:absolute px-2 font-semibold text-[14px] self-end ${textColors.grayish_blue}`}>Last Month</span>
            {
                !loader
                ?
                data && data.length
                ?
                <MonthBarChart color={BarChartColor} keys={keys} data={data}/>
                :
                <NoData classes='w-[50%]' icon={<FaChartSimple className={`${textColors.blue} text-[13px]`}/>} content='No Data'/>
                :
                <Loader classes='w-5 h-5 before:w-6 before:h-6'/>
            }
            </div>
        </div>
    </div>
</div>
  )
}
