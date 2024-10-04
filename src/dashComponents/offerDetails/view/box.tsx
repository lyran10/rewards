import React from 'react'

type Props = {
    children : React.ReactNode
    // data : any
    border : string,
    padding : string,
    gridFlow : string
}

export const Box = ({padding, border, gridFlow, children} : Props) => {

    return (
    <div className={`h-full w-full md:w-[50%] lg:w-[50%] xl:w-[50%] ${padding} ${border}`}>
        <div className={`w-full text-[12px] md:text-[14px] lg:text-[17px] xl:text-[17px] 2xl:text-[17px] ${gridFlow}`}>
          {children}
        </div>
    </div>
  )
}

// {
//     headers.map(({id, header, span, value}) => {
//         return(
//             <div key={id} className={`${span} flex flex-col gap-1 relative`}>
//                 <span className={`font-semibold text-[13px] ${textColors.grayish_blue}`}>{header}</span>
//                 {
//                     id === "image"
//                     ?
//                     <img className=' w-full md:w-[80%] lg:w-[70%] xl:w-[60%]' src={value as string} alt="" />
//                     :
//                     id === "status"
//                     ?
//                     <span className={`font-semibold text-[15px] ${value === "Active" ? textColors.green : textColors.red}`}>{value}</span>
//                     :
//                     <span className={`font-semibold text-[15px] text-[#334155]`}>{value}</span>
//                 }
               
//             </div>
//         )
//     })
// }
