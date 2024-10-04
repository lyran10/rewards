import React from "react"
import { Table } from '../../offerDetails/table/table'
import { useColors } from '../../../customHooks/useColors'
import { StackLoader } from '../../../commonComponents/stackLoader'
import { NoData } from '../noData'
import { FaTable } from "react-icons/fa6";

type Props = {
    data : any[] | undefined,
    loading : boolean
}

export const OfferDetailsTable = ({data,loading} : Props) => {
    const {textColors, bgColors} = useColors()
    
    const displayHeader = () => {
        let headers = ["Sr.no", "Offer Title", "Discount Title", "Start date", "End date" ]
    
        return(
            headers.map((item) => {
                return(
                    <th className={`p-2 font-semibold text-[9px] md:text-[10px] lg:text-[12px] text-start ${textColors.grayish_blue}`} key={item}>{item}</th>
                )
            })
            )
    }

    const displayBody = () => {
        return (
            !loading
            ?
            data && data.length
            ?
            data.map(({srNo, discountTitle,offertitle, startDate, endDate}, index : number) => {

                return (
                    <tr key={index} className={`${index % 2 !== 0 ? bgColors.white_smoke : ""} border-b text-center body relative text-[#475569] text-[9px] md:text-[9px] lg:text-[11px]`}>
                        <td className="p-2 font-[600] text-start">{index + 1}</td>
                        <td className="p-2 font-[600] text-start">{offertitle}</td>
                        <td className="p-2 font-[600] text-start">{discountTitle}</td>
                        <td className="p-2 font-[600] text-start">{startDate.split("T")[0]}</td>
                        <td className="p-2 font-[600] text-start">{endDate.split("T")[0]}</td>
                    </tr>
                )
            })
            :
            <NoData classes='w-full absolute w-full h-[100px]' content='No Offers' icon={<FaTable className={`${textColors.blue} text-[13px]`}/>}/>
            :
                <tr className='absolute w-full h-[300px] flex justify-center items-center'>
                <StackLoader length={6}/>
                </tr>
        )
        }


  return <Table displayHeader={displayHeader} displayBody={displayBody}/>
  
}



// data && data.length
// ?
// data.map(({srNo, discountTitle,offertitle, startDate, endDate}, index : number) => {

//     return (
//         <tr key={index} className={`${index % 2 !== 0 ? bgColors.white_smoke : ""} border-b text-center body relative text-[#475569] text-[9px] md:text-[9px] lg:text-[11px]`}>
//             <td className="p-2 font-[600] text-start">{index + 1}</td>
//             <td className="p-2 font-[600] text-start">{offertitle}</td>
//             <td className="p-2 font-[600] text-start">{discountTitle}</td>
//             <td className="p-2 font-[600] text-start">{startDate.split("T")[0]}</td>
//             <td className="p-2 font-[600] text-start">{endDate.split("T")[0]}</td>
//         </tr>
//     )
//  })
// :
// <tr className='absolute w-full h-[300px] flex justify-center items-center'>
//    <td className='font-[600]'>No Offers</td> 
// </tr>
