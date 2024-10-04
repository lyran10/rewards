import React, { useEffect, useState } from 'react'
import useDynamicModules from '../../../customHooks/useDynamicModules';
// import Chart from 'react-apexcharts'

type Props = {
  data : {redeemCount: number, claimCount: number}
}

type DonutSeriesData = number[];

export type DonutApexChartOptions = {
  chart: {
      type: "donut";
      height: number;
      width: number
  };
  dataLabels: {
    enabled: boolean, // Disable labels on the pie slices
  },
  // series: DonutSeriesData;
  // plotOptions: {
  //     pie: {
  //         donut: {
  //             labels: {
  //                 show: boolean;
  //                 total: {
  //                     show: boolean;
  //                     label: string;
  //                     fontSize: string;
  //                     fontWeight: string;
  //                     color: string;
  //                 };
  //                 fontSize : string;
  //             };
  //         };
  //     };
  // };
//   fill: {
//     type: string,
//     gradient: {
//       shade: string,
//       type: string,
//       shadeIntensity: number,
//       gradientToColors: string[] | undefined, // optional, if not defined - uses the shades of same color in series
//       inverseColors: boolean,
//       opacityFrom: number,
//       opacityTo: number,
//       stops: number[],
//     //   colorStops: {offset : number,color : string, opacity : number}[]
//     },
//     dropShadow: {
//         enabled: true,
//         top: number,
//         left: number,
//         blur: number,
//         opacity: number
//       }
//   },
  colors: string[];
  legend: {
      show: boolean;
      position: 'bottom';
      // offsetX : number;
      // offsetY : number,
    //   itemMargin: {
    //     horizontal: number;
    //     vertical: number;
    //   };
      // fontSize : string,
      horizontalAlign: 'center' | 'left' | 'right';
      // formatter: any;
  };
  labels: string[];
  tooltip: {
    enabled: boolean
  },
}

export const PieChart = ({data} : Props) => {
  const ApexCharts = useDynamicModules({library : "react-apexcharts"})

  if (!ApexCharts) return <></>;
  
  
  const labels = ["Redeem", "Claim"]
  const bgColors = ["bg-[#62BBAB]", "bg-[#8E8CF6]"]
  const colors = ["#62BBAB", "#8E8CF6"]
  let options : DonutApexChartOptions = {
    chart: {
      type: "donut",
        height: 800,
        width : 500,
  },
  dataLabels: {
    enabled: false, // Disable labels on the pie slices
  },
    labels : labels,
    colors : colors,
    legend: {
      show: false,
      // margin : "auto",
      // offsetX : 0,
      // offsetY : 0,
      position: 'bottom',
      // itemMargin: {
      //     horizontal: 3,
      //     vertical: 3
      // },
      horizontalAlign: 'center', 
      // fontSize : "11px",
      // formatter: function (seriesName :any, opts :any) {
      //         return [
      //         `
      //         <div className="relative flex justify-center items-center gap-2">
      //           <div className="flex gap-1 justify-center items-center">
      //             <span className="">${opts.w.globals.series[opts.seriesIndex]}</span>
      //             <div className="absolute w-5 h-5 bg-[#f5f5]">liran</div>
      //             <span>${seriesName}</span>
      //           </div>
      //         </div>
      //         `
      //     ]
      // },
  },
  tooltip: {
    enabled: data && !data.redeemCount && !data.claimCount ? false : true
  },
  }


  // <span style="width : 100%;display:flex">
  //               <div style="width : 50%">
  //                 <span class="">${seriesName}</span></div>
  //               <div style="width : 50%">
  //                <div style="width : 100%;display:flex">
  //                 <span style="width : 40%">${opts.w.globals.series[opts.seriesIndex]}</span>
  //                 <span style="width : 60%">[ ${percentage}% ]</span>
  //                </div>
  //              </div>
  //             </span>

  return (
    <>
    <div className='static md:absolute lg:absolute xl:absolute top-12 md:top-16 lg:top-12 xl:top-16 w-full h-[60%] md:h-full lg:h-full xl:h-full'>
      
        <ApexCharts
        type='pie'
        width={"100%"}
        height={"150%"}
        series={[data && data.redeemCount || 0.0001,data && data.claimCount || 0.0001]}
        options={options}
        />
    </div>
  <div className='flex justify-center md:justify-around ld:justify-around xl:justify-around items-center gap-2 w-full'>
    {
      [data && data.redeemCount || 0,data && data.claimCount || 0].map((num, index) => {
        return (
          <div key={index} className='flex flex-col gap-1 justify-center items-center font-semibold'>
            <span>{num}</span>
            <div className={`h-[3px] w-8 rounded-md ${bgColors[index]}`}></div>
            <span className='text-[#94a3b8] text-[14px] md:text-[12px] lg:text-[14px] xl:text-[14px]'>{labels[index]}</span>
          </div>
        )
      })
    }
  </div>
</>
  )
}
