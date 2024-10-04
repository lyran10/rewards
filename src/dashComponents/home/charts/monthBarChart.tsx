// import Chart from 'react-apexcharts';
import React from "react"
import { useMonthBarChartData } from '../../../customHooks/useMonthBarChartData';
import { useEffect, useState } from 'react';
import useDynamicModules from "../../../customHooks/useDynamicModules";

type Props = {
  keys : {name : string, date : string, count : string},
  color : string,
  data : {redeemDayName: string, redeemDate: string, redeemCount: number}[] | {claimDayName: string, claimDate: string, claimCount: number}[] | undefined
}

export const MonthBarChart = ({color, keys, data} : Props) => {
  const {chartOptions, series} = useMonthBarChartData({color, keys, data})
  const ApexCharts = useDynamicModules({library : "react-apexcharts"})

  if (!ApexCharts) return <></>;

  return (
    <div className='w-full h-full'>
      <ApexCharts
        options={chartOptions}
        series={series}
        type="bar"
        height={"100%"}
      />
    </div>
  ); 
}
