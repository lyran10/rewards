import React from 'react'

interface CSSPropertiesWithVars extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}

const style = (num : number, color : string, per : string) => {
    const styles : CSSPropertiesWithVars =  {
      "--i" : num,
      "--per" : per,
      background : color
    }
  
    return styles
  }

export const Bubbles = () => {
  let colors = ["#facc15","#a3e635","#34d399","#2dd4bf","#22d3ee","#38bdf8","#60a5fa","#4338ca",
"#44403c", "#e11d48","#fbbf24","#e11d48","#365314","#3f6212","#ca8a04","#44403c","#b91c1c","#4ade80"
  ]
  let number = 30

  const obj = [
    {
      id : "bub1",
      left : "1%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub2",
      left : "2%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub3",
      left : "3%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub4",
      left : "4%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub5",
      left : "5%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub6",
      left : "6%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub7",
      left : "7%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub8",
      left : "8%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub9",
      left : "9%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub10",
      left : "10%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub11",
      left : "11%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub12",
      left : "12%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub13",
      left : "13%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub14",
      left : "14%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub15",
      left : "15%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub16",
      left : "16%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub17",
      left : "17%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub18",
      left : "18%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub19",
      left : "19%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub20",
      left : "20%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub21",
      left : "21%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub22",
      left : "22%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub23",
      left : "23%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub24",
      left : "24%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub25",
      left : "25%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub26",
      left : "26%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub27",
      left : "27%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub28",
      left : "28%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub29",
      left : "29%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub30",
      left : "30%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub31",
      left : "31%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub32",
      left : "32%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub33",
      left : "33%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub34",
      left : "34%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub35",
      left : "35%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub36",
      left : "36%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub37",
      left : "37%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub38",
      left : "38%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub39",
      left : "39%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub40",
      left : "40%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub41",
      left : "41%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub42",
      left : "42%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub43",
      left : "43%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub44",
      left : "44%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub45",
      left : "45%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub46",
      left : "46%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub47",
      left : "47%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub48",
      left : "48%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub49",
      left : "49%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub50",
      left : "50%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub51",
      left : "51%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub52",
      left : "52%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub53",
      left : "53%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub54",
      left : "54%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub55",
      left : "55%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub56",
      left : "56%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub57",
      left : "57%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub58",
      left : "58%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub59",
      left : "59%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub60",
      left : "60%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub61",
      left : "61%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub62",
      left : "62%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub63",
      left : "63%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub64",
      left : "64%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub65",
      left : "65%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub66",
      left : "66%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub67",
      left : "67%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub68",
      left : "68%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub69",
      left : "69%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * 18) + 1 ]
    },
    {
      id : "bub70",
      left : "70%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub71",
      left : "71%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub72",
      left : "72%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub73",
      left : "73%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub74",
      left : "74%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub75",
      left : "75%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub76",
      left : "76%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub77",
      left : "77%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub78",
      left : "78%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub79",
      left : "79%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub80",
      left : "80%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub81",
      left : "81%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub82",
      left : "82%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub83",
      left : "83%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub84",
      left : "84%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub85",
      left : "85%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub86",
      left : "86%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub87",
      left : "87%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub88",
      left : "88%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub89",
      left : "89%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub90",
      left : "90%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub91",
      left : "91%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub92",
      left : "92%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub93",
      left : "93%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub94",
      left : "94%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub95",
      left : "95%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub96",
      left : "96%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub97",
      left : "97%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub98",
      left : "98%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub99",
      left : "99%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
    {
      id : "bub100",
      left : "100%",
      randomNum : Math.floor(Math.random() * number) + 1 ,
      color : colors[Math.floor(Math.random() * colors.length) + 1 ]
    },
  ]

  return (
    <div className='bubbles h-full w-full'>
      {/* {
        obj.map(({color, id, randomNum, left}) => {
          return <span key={id} className='bubble' style ={style(randomNum, color,left)}></span>
        })
      } */}
    <span className='block1' style ={style(11, "#facc15","1%")}></span>
    <span className='block1' style ={style(12, "#a3e635","2%")}></span>
    <span className='block1' style ={style(24, "#34d399","3%")}></span>
    <span className='block1' style ={style(10, "#2dd4bf","4%")}></span>
    <span className='block1' style ={style(14, "#22d3ee","5%")}></span>
    <span className='block1' style ={style(23, "#38bdf8","6%")}></span>
    <span className='block1' style ={style(18, "#60a5fa","7%")}></span>
    <span className='block1' style ={style(16, "#60a5fa","8%")}></span>
    <span className='block1' style ={style(19, "#4338ca","9%")}></span>
    <span className='block1' style ={style(20, "#44403c","10%")}></span>
    <span className='block1' style ={style(22, "#e11d48","11%")}></span>
    <span className='block1' style ={style(25, "#60a5fa","12%")}></span>
    <span className='block1' style ={style(18, "#f97316","13%")}></span>
    <span className='block1' style ={style(21, "#b91c1c","14%")}></span>
    <span className='block1' style ={style(15, "#22d3ee","15%")}></span>
    <span className='block1' style ={style(13, "#4ade80","16%")}></span>
    <span className='block1' style ={style(26, "#fbbf24","17%")}></span>
    <span className='block1' style ={style(17, "#ca8a04","18%")}></span>
    <span className='block1' style ={style(13, "#3f6212","19%")}></span>
    <span className='block1' style ={style(28, "#365314","20%")}></span>
 
    <span className='block2' style ={style(11, "#facc15","21%")}></span>
    <span className='block2' style ={style(12, "#a3e635","22%")}></span>
    <span className='block2' style ={style(24, "#34d399","23%")}></span>
    <span className='block2' style ={style(10, "#2dd4bf","24%")}></span>
    <span className='block2' style ={style(14, "#22d3ee","25%")}></span>
    <span className='block2' style ={style(23, "#38bdf8","26%")}></span>
    <span className='block2' style ={style(18, "#60a5fa","27%")}></span>
    <span className='block2' style ={style(16, "#60a5fa","28%")}></span>
    <span className='block2' style ={style(19, "#4338ca","29%")}></span>
    <span className='block2' style ={style(20, "#44403c","30%")}></span>
    <span className='block2' style ={style(22, "#e11d48","31%")}></span>
    <span className='block2' style ={style(25, "#60a5fa","32%")}></span>
    <span className='block2' style ={style(18, "#f97316","33%")}></span>
    <span className='block2' style ={style(21, "#b91c1c","34%")}></span>
    <span className='block2' style ={style(15, "#22d3ee","35%")}></span>
    <span className='block2' style ={style(13, "#4ade80","36%")}></span>
    <span className='block2' style ={style(26, "#fbbf24","37%")}></span>
    <span className='block2' style ={style(17, "#ca8a04","38%")}></span>
    <span className='block2' style ={style(13, "#3f6212","39%")}></span>
    <span className='block2' style ={style(28, "#365314","40%")}></span>

    <span className='block3' style ={style(11, "#facc15","41%")}></span>
    <span className='block3' style ={style(12, "#a3e635","42%")}></span>
    <span className='block3' style ={style(24, "#34d399","43%")}></span>
    <span className='block3' style ={style(10, "#2dd4bf","44%")}></span>
    <span className='block3' style ={style(14, "#22d3ee","45%")}></span>
    <span className='block3' style ={style(23, "#38bdf8","46%")}></span>
    <span className='block3' style ={style(18, "#60a5fa","47%")}></span>
    <span className='block3' style ={style(16, "#60a5fa","48%")}></span>
    <span className='block3' style ={style(19, "#4338ca","49%")}></span>
    <span className='block3' style ={style(20, "#44403c","50%")}></span>
    <span className='block3' style ={style(22, "#e11d48","51%")}></span>
    <span className='block3' style ={style(25, "#60a5fa","52%")}></span>
    <span className='block3' style ={style(18, "#f97316","53%")}></span>
    <span className='block3' style ={style(21, "#b91c1c","54%")}></span>
    <span className='block3' style ={style(15, "#22d3ee","55%")}></span>
    <span className='block3' style ={style(13, "#4ade80","56%")}></span>
    <span className='block3' style ={style(26, "#fbbf24","57%")}></span>
    <span className='block3' style ={style(17, "#ca8a04","58%")}></span>
    <span className='block3' style ={style(13, "#3f6212","59%")}></span>
    <span className='block3' style ={style(28, "#365314","60%")}></span>
    <span className='block3' style ={style(13, "#4ade80","61%")}></span>
    <span className='block3' style ={style(26, "#fbbf24","62%")}></span>
    <span className='block3' style ={style(17, "#ca8a04","63%")}></span>
    <span className='block3' style ={style(13, "#3f6212","64%")}></span>
    <span className='block3' style ={style(28, "#365314","65%")}></span>

    <span className='block4' style ={style(11, "#facc15","66%")}></span>
    <span className='block4' style ={style(12, "#a3e635","67%")}></span>
    <span className='block4' style ={style(24, "#34d399","68%")}></span>
    <span className='block4' style ={style(10, "#2dd4bf","69%")}></span>
    <span className='block4' style ={style(14, "#22d3ee","70%")}></span>
    <span className='block4' style ={style(23, "#38bdf8","71%")}></span>
    <span className='block4' style ={style(18, "#60a5fa","72%")}></span>
    <span className='block4' style ={style(16, "#60a5fa","73%")}></span>
    <span className='block4' style ={style(19, "#4338ca","74%")}></span>
    <span className='block4' style ={style(20, "#44403c","75%")}></span>
    <span className='block4' style ={style(22, "#e11d48","76%")}></span>
    <span className='block4' style ={style(25, "#60a5fa","77%")}></span>
    <span className='block4' style ={style(18, "#f97316","78%")}></span>
    <span className='block4' style ={style(21, "#b91c1c","79%")}></span>
    <span className='block4' style ={style(15, "#22d3ee","80%")}></span>
    <span className='block4' style ={style(13, "#4ade80","81%")}></span>
    <span className='block4' style ={style(26, "#fbbf24","82%")}></span>
    <span className='block4' style ={style(17, "#ca8a04","83%")}></span>
    <span className='block4' style ={style(13, "#3f6212","84%")}></span>
    <span className='block4' style ={style(28, "#365314","85%")}></span>
    <span className='block4' style ={style(13, "#4ade80","86%")}></span>
    <span className='block4' style ={style(26, "#fbbf24","87%")}></span>
    <span className='block4' style ={style(17, "#ca8a04","88%")}></span>
    <span className='block4' style ={style(13, "#3f6212","89%")}></span>
    <span className='block4' style ={style(28, "#365314","90%")}></span>

    <span className='block5' style ={style(11, "#facc15","91")}></span>
    <span className='block5' style ={style(12, "#a3e635","92%")}></span>
    <span className='block5' style ={style(24, "#34d399","93%")}></span>
    <span className='block5' style ={style(10, "#2dd4bf","94%")}></span>
    <span className='block5' style ={style(14, "#22d3ee","95%")}></span>
    <span className='block5' style ={style(23, "#38bdf8","96%")}></span>
    <span className='block5' style ={style(18, "#60a5fa","97%")}></span>
    <span className='block5' style ={style(16, "#60a5fa","98%")}></span>
    <span className='block5' style ={style(19, "#4338ca","99%")}></span>
    <span className='block5' style ={style(20, "#44403c","100%")}></span>
  </div>
  )
}
