import React from "react"
import { useRedux } from '../customHooks/useRedux'
import { useColors } from '../customHooks/useColors'
import { useFilter } from '../customHooks/useFilter'
import { setStartDate } from '../store/reducer'
import { StackLoader } from './stackLoader'
import { Button } from '../authComponents/button'
import { useClick } from '../customHooks/useClick'
import { Inputs } from '../authComponents/inputs'
import { Table } from '../dashComponents/offerDetails/table/table'
import { MdFilterAltOff } from "react-icons/md";
import { InputTypes } from '../types/types'
import { NoData } from '../dashComponents/home/noData'
import { FaTable } from "react-icons/fa6";

type Props = {
    data : InputTypes
    handleChange : (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
    setData : React.Dispatch<React.SetStateAction<InputTypes>>,
    id :string
    inputs : any[]
    offersData : any[],
    loading : boolean,
}

export const DisplayOffers = ({id, inputs, offersData, loading, data, setData, handleChange} : Props) => {
    const {dispatch} = useRedux()
    const {bgColors, textColors} = useColors()
    const {confirmClaim} = useClick()
    const { filtered, filterDate, removeFilterDate } = useFilter({
        id : id,
        inputData : data, 
        data : offersData, 
        value : data.search, 
        key1 : "name", 
        key2 : "mobileNo",
        key3 : "emailId", 
        key4 : "offertitle", 
        key5 : "offer_discount", 
        key6 : "offerCode", 
        start : data.start_Date, 
        end : data.end_Date, 
        setInputData :  setData
    })

    const change = (e : any) => {
        if(e.target.name === "start_Date") dispatch(setStartDate(e.target.value))
        handleChange(e)
    }

    
    const displayHeader = () => {
        let headers = ["Sr.no", "Name","Mob.no","Email", id === "redeem" ? "Redeem Date" : "Claim Date","Offer", "Discount", "Coin", "Start date", "End date", "code" ]

        return(
            headers.map((item) => {
                return(
                    <th className={`p-2 font-semibold text-[9px] md:text-[12px] lg:text-[12px] text-start ${textColors.grayish_blue}`} key={item}>{item}</th>
                )
            })
            )
    }

    const displayBody = () => {
        return (
            !loading
            ?
            filtered && filtered.length
            ?
            filtered.map((offers, index : number) => {
        
                return (
                    <tr key={index} className={`${index % 2 !== 0 ? bgColors.white_smoke : ""} border-b h-[50px] text-center body relative text-[#475569] text-[11px]`}>
                        <td className="p-2 font-[600] text-start">{offers.srno}</td>
                        <td className="p-2 font-[600] text-start">{offers.name}</td>
                        <td className="p-2 font-[600] text-start">{offers.mobileNo}</td>
                        <td className="p-2 font-[600] text-start">{offers.emailId}</td>
                        <td className="p-2 font-[600] text-start">{id === "redeem" ? offers.redeemDatetime :offers.claimDatetime }</td>
                        <td className="p-2 font-[600] text-start">{offers.offertitle}</td>
                        <td className="p-2 font-[600] text-start">{offers.offer_discount}</td>
                        <td className="p-2 font-[600] text-start">{offers.offercoin}</td>
                        <td className="p-2 font-[600] text-start">{offers.offerStartDate}</td>
                        <td className="p-2 font-[600] text-start">{offers.offerEndDate}</td>
                        <td className="p-2 font-[600] text-start">{offers.offerCode}</td>
                        <td className="p-2 font-[600] text-start flex gap-1 justify-center items-center h-[50px]">
                            {
                              id === "redeem"
                              ? 
                              !offers.claimStatus
                              ?
                              <Button id='redeem' loaderClasses=''  classes={`px-2 py-1 text-[10px] md:text-[10px] lg:text-[10px] ${bgColors.blue} ${textColors.white_smoke} flex justify-center items-center gap-2 rounded-md`} handleClick={() => confirmClaim(offers)} icon={<></>}  content={"Claim"}/>
                              :
                              null
                              :
                              null
                            }                        
                        </td>
                    </tr>
                )
            })
            :
            <NoData classes='w-full absolute w-full h-[300px]' content='No Offers' icon={<FaTable className={`${textColors.blue} text-[13px]`}/>}/>
            // <tr className='absolute w-full h-[300px] flex justify-center items-center'>
            //  <td className='font-[600]'>No Offers</td> 
            // </tr>
            :
            <tr className='absolute w-full h-[300px] flex justify-center items-center'>
            <StackLoader length={6}/>
            </tr>
        )
        }



  return (
    <section className={`rounded-md relative w-full h-full md:mt-0 lg:mt-0 xl:mt-0 shadow-chart px-5 py-3 flex flex-col justify-start items-center gap-3 ${bgColors.white}`}>
    <header className='font-semibold text-[15px] self-start'>{id === "redeem" ? "Redeem Offers" : "Claim Offers"}</header>
    <div className='mt-8 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 w-full md:w-[70%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%] flex gap-7 md:gap-3 lg:gap-3 xl:gap-5 flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center static md:absolute lg:absolute xl :absolute 2xl:absolute bottom-[102%] right-0'>
      <Inputs handleChange={change} inputs={inputs.slice(0,2) as any} setData={setData} data={data} width='self-end w-full md:w-[50%] lg:w-[50%] xl:w-[50%]' py='' />
      <div className='flex flex-row gap-1 relative'>
      <Button id='filterDate' loaderClasses=''  classes={`${textColors.white_smoke} ${bgColors.blue} h-[30px] w-[50px] self-start text-[10px] py-1 px-2`} handleClick={filterDate} icon={<></>}  content={"Filter"}/>
      {
        data.start_Date && data.end_Date
        ?
        <Button id='removeFilterDate' loaderClasses=''  classes={`${textColors.white_smoke} ${bgColors.blue} relative h-[30px] w-full md:w-full lg:w-auto xl:w-auto 2xl:w-auto text-[12px] py-1 px-2 before:absolute hover:before:flex before:content-['Remove_Filter'] before:text-black before:text-[9px] before:rounded-md before:bg-white before:shadow-nav before:py-1 before:px-2 before:bottom-[110%] before:w-[70px] before:hidden`} handleClick={removeFilterDate} icon={<MdFilterAltOff/>}  content={""}/>
        :
        null
      }
      </div>
      <Inputs handleChange={change} inputs={inputs.slice(2,3) as any} setData={setData} data={data} width='self-end w-full md:w-[50%] lg:w-[50%] xl:w-[50%]' py='' />
     </div>
    <Table displayHeader={displayHeader} displayBody={displayBody}/>  
   </section>
  )
}
