import { ApexOptions } from 'apexcharts';

type Props = {
  keys : {name : string, date : string, count : string},
  color : string,
  data : {redeemDayName: string, redeemDate: string, redeemCount: number}[] | {claimDayName: string, claimDate: string, claimCount: number}[] | undefined
}

export const count = (data : any[] | undefined, keys : {name : string, date : string, count : string}) => {
  let array = []
  let {count } = keys
  if(data && data.length){
    for(let i = 0; i < data.length;i++){
      array.push(data[i][`${count}`])
    }
  }
  return array
}

export const categories = (data : any[] | undefined, keys : {name : string, date : string, count : string}) => {
  let array = []
  let {name } = keys
    if(data && data.length){
      for(let i = 0; i < data.length;i++){
        const cat = data[i] as any
        array.push(`${cat[`${name}`][0].toUpperCase()}${cat[`${name}`][1]}`)
      }
    }
  return array
}

export const useWeekBarChartData = ({keys, color,data} : Props) => {
  
  const chartOptions : ApexOptions = {
    chart: {
      type: 'bar',
      height: 300,
      offsetY: 10,
      stacked: true,
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '18%',
        barHeight: "100%", // Ensures bars have the same height
        borderRadius: 4
      },
    },
    colors: [color, color], // Background and real bar colors
    fill: {
      opacity: [1, 0.4,], // Opacity for background and real bars
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories(data, keys),
      axisBorder: {
        show: false, // Removes the axis line
      },
      axisTicks: {
        show: false, // Removes the ticks on the axis
      },
      labels: {
        style: {
          colors: '#94a3b8',
          fontSize: '9px'
        },
      },
      offsetY: -10, // Adjust horizontal offset of axis labels
    },
    yaxis: {
        labels: {
          show: false
        },
        // max: maxValue, 
      },
      tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          let {date, name} = keys
          const item = data && data[dataPointIndex] as any
          let split = data && item[date].split("-")
          let date1 = `${split[2]}-${split[1]}-${split[0]}`
          return (
            `<div style="padding:10px;font-size: 12px;background-color : ${color}; color : white; border :none;">` +
            '<span style="font-weight:bold;">Day: </span>' + item[name] +
            "<br/>" +
            '<span style="font-weight:bold;">Date: </span>' + date1 +
            "<br/>" +
            '<span style="font-weight:bold;">Count: </span>' + series[seriesIndex][dataPointIndex] +
            "</div>"
          );
        }
      },
    legend: {
      show: false,
    },
    grid: {
        show: false, // Optionally hide the grid for a cleaner look
      },
  };

  const chartSeries = [
    {
      name: 'Redeem Count',
      data: count(data, keys), // Real data values
    },
    // {
    //   name: 'Background',
    //   data:  [100, 100, 100, 100, 100, 100, 100], // Background data values
    // }
  ];

  return {chartOptions, chartSeries}
}
