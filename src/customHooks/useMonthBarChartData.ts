import { ApexOptions } from 'apexcharts';
import { count, categories } from './useWeekBarChartData';

type Props = {
  keys : {name : string, date : string, count : string},
  color : string,
  data : {redeemDayName: string, redeemDate: string, redeemCount: number}[] | {claimDayName: string, claimDate: string, claimCount: number}[] | undefined
}

export const useMonthBarChartData = ({keys, color,data} : Props) => {

  let series = [
    {
      name: "Total",
      type: "line",
      data: count(data, keys) || []
  },
  {
      name: "Segregated",
      type: 'column',
      data: count(data, keys) || []
  },
  ]
  
  const chartOptions : ApexOptions = {
    chart: {
      type: 'line',
      height: 300,
      offsetY: 43,
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
        borderRadius: 4,
        dataLabels: {
          position: 'outsideTop'
        }
      },
    },
    dataLabels: {
                enabled: true,
                style: {
                    colors: ['white'], // Set the color of the data labels here
                    fontSize: '11px', // Optional: Adjust the font size
                    fontWeight: '', // Optional: Adjust the font weight
                  },
                enabledOnSeries: [0],
                textAnchor: "middle",
                offsetY: -10,
                background: {
                  enabled: true,
                  foreColor: '#000',
                  borderWidth: 0
                }
              },
    colors: [color], // Background and real bar colors
    // fill: {
    //   opacity: [1], // Opacity for background and real bars
    // },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: '#94a3b8',
          fontSize: '9px'
        },
      },
      categories: categories(data, keys),
      axisBorder: {
        show: false, // Removes the axis line
      },
      axisTicks: {
        show: false, // Removes the ticks on the axis
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
  // [2,65,98,45,78,21,65,98,45,32]
  // count(data, keys)
  const chartSeries = [
    {
      data: count(data, keys), // Real data values
    },
    // {
    //   name: 'Background',
    //   data:  [100, 100, 100, 100, 100, 100, 100], // Background data values
    // }
  ];

  return {chartOptions, series}
}














// import { ApexOptions } from 'apexcharts';
// import { count } from './useWeekBarChartData';

// type Props = {
//   keys : {name : string, date : string, count : string},
//   color : string,
//   data : {redeemDayName: string, redeemDate: string, redeemCount: number}[] | {claimDayName: string, claimDate: string, claimCount: number}[] | undefined
// }
// // [2,7,5,10,5,7,12,7,4,10,2,7,5,10,5,7,12,7,4,10] 
// export const useMonthBarChartData = ({color, keys, data} : Props) => {
//   console.log(data)
//     const chartOptions : ApexOptions = {
//       colors: [color], 
//       chart: {
//         type: 'bar',
//         height: 300,
//         offsetY: 25,
//         stacked: true,
//         toolbar: {
//           show: false
//         },
//       },
//       plotOptions: {
//         bar: {
//           horizontal: true,
//           columnWidth: '30%',
//           dataLabels: {
//               position: 'outsideTop'
//             }
//         },
//       },
//       // Background and real bar colors
//       dataLabels: {
//           enabled: true,
//           style: {
//               colors: ['white'], // Set the color of the data labels here
//               fontSize: '11px', // Optional: Adjust the font size
//               fontWeight: '', // Optional: Adjust the font weight
//             },
//           enabledOnSeries: [0],
//           textAnchor: "middle",
//           offsetY: -6,
//           background: {
//             enabled: true,
//             foreColor: '#000',
//             borderWidth: 0
//           }
//         },
//       xaxis: {
//       labels: {
//           show: false
//           },
//       axisBorder: {
//           show: false, // Removes the axis line
//           },
//       },
//       yaxis: {
//           labels: {
//             show: false
//           },
//           // max: maxValue, 
//         },
//         tooltip: {
//           custom: function({ series, seriesIndex, dataPointIndex, w }) {
//             let {date} = keys
//             console.log(data)
//             const item = data && data[dataPointIndex] as any
//             // let split = data && item[date].split("-")
//             // let date1 = `${split[2]}-${split[1]}-${split[0]}`
//             console.log(item)
//             return (
//               `<div style="padding:10px;font-size: 12px;background-color : ${color}; color : white; border :none;">` +
//               '<span style="font-weight:bold;">Date: </span>' + "date1" +
//               "<br/>" +
//               '<span style="font-weight:bold;">Count: </span>' + series[seriesIndex][dataPointIndex] +
//               "</div>"
//             );
//           }
//         },
//       legend: {
//         show: false,
//       },
//       grid: {
//           show: false, // Optionally hide the grid for a cleaner look
//         },
//     };
//     // count()
//     const chartSeries = [
//       {
//         name: 'Claim Count',
//         data: count(data, keys), // Real data values
//       },
//     ];

//   return {chartSeries, chartOptions}
  
// }
