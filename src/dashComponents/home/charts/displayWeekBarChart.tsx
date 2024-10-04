import React from "react"
import { Loader } from '../../../commonComponents/loader'
import { useColors } from '../../../customHooks/useColors'
import { NoData } from '../noData';
import WeekBarChart from './weekBarChart'
import { FaChartSimple } from "react-icons/fa6";


type Props = {
    loader : boolean
    BarChartColor : string,
    header : string,
    data : {redeemDayName: string, redeemDate: string, redeemCount: number}[] | {claimDayName: string, claimDate: string, claimCount: number}[] | undefined
    keys : {name : string, date : string, count : string}
}

export const sum = (data : {redeemDayName: string, redeemDate: string, redeemCount: number}[] | {claimDayName: string, claimDate: string, claimCount: number}[] | undefined, keys : {name : string, date : string, count : string}) => {
    let total = 0
    let {count} = keys
        if(data && data.length){
            for(let i = 0; i < data.length;i++){
                const currentData = data[i] as any;
                total += currentData[count]
            }
        }
        return total
    }

export const DisplayWeekBarChart = ({loader, BarChartColor, header, data, keys } : Props) => {
    const {bgColors, textColors} = useColors()

  return (
    <div className={`w-full h-[50%] shadow-chart rounded-md flex ${bgColors.white}`}>
    <div className='w-[40%] md:w-[30%] lg:w-[40%] xl:w-[40%] p-3 flex flex-col justify-between'>
        <span className='font-semibold text-[14px] self-start'>{header}</span>
        <span className='font-semibold text-[50px] md:text-[35px] lg:text-[50px] xl:text-[50px] self-start '>{sum(data, keys)}</span>
    </div>
        <div className='relative w-[60%] md:w-[70%] lg:w-[60%] xl:w-[60%] h-full justify-between self-end p-3 flex flex-col gap-2'>
            <span className={`font-semibold text-[14px] self-end px-2 ${textColors.grayish_blue}`}>Last Week</span>
            {/* <BarWeekChart realBarBg='bg-[rgb(142,140,246)]' opacityBarBg='bg-[rgba(142,140,246,0.6)]'/> */}
            {
                !loader
                ?
                data && data.length
                ?
                <WeekBarChart keys={keys} data={data} color={BarChartColor}/>
                :
                <NoData classes='w-[50%]' icon={<FaChartSimple className={`${textColors.blue} text-[13px]`}/>} content='No Data'/>
                :
                <Loader classes='w-5 h-5 before:w-6 before:h-6'/>
            }
           
        </div>
    </div>
  )
}
