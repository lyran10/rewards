import React from 'react'
import { useColors } from '../../customHooks/useColors'
import { useGetOfferDetails } from '../../customHooks/useGetOfferDetails'
import { Table } from './table/table'
import { Button } from '../../authComponents/button'
import { UseInput } from '../../customHooks/useInput'
import { useFilter } from '../../customHooks/useFilter'
import { FaSearch } from "react-icons/fa";
import { useRedux } from '../../customHooks/useRedux'
import { StackLoader } from '../../commonComponents/stackLoader'
import { Inputs } from '../../authComponents/inputs'
import { useRadioFilter } from '../../customHooks/useRadioFilter'
import { setStartDate } from '../../store/reducer'
import { MdFilterAltOff } from "react-icons/md";
import { useClick } from '../../customHooks/useClick'
import { NoData } from '../home/noData'
import { FaTable } from "react-icons/fa6";

export const isActive = (active : boolean, end_date : string) => {
    let date  = new Date
    let endDate = new Date(end_date)

    if(active && endDate < date) return false
    else if(!active && endDate < date) return false
    else return true

}

export function convertTo12HourFormat(time : string) {
  const [hour, minute, second] = time.split(':');
  let hour12 = parseInt(hour, 10);
  const period = hour12 >= 12 ? 'PM' : 'AM';
  hour12 = hour12 % 12 || 12;
  const formattedHour = hour12.toString().padStart(2, '0');

  return `${formattedHour}:${minute} ${period}`;
}

export const OfferDetails = () => {
const {dispatch} = useRedux()
const {handleChange, data, setData} = UseInput()
const {navigateToEdit, navigateToview} = useClick()
const {bgColors, textColors} = useColors()
const { offerDetails, loading } = useGetOfferDetails()
const {radioFilter} = useRadioFilter({value : data.isActive, data : offerDetails})
const { filtered, filterDate, removeFilterDate } = useFilter({
  id : "details",
  inputData : data, 
  data : radioFilter, 
  value : data.search, 
  key1 : "offerTitle", 
  key2 : "offerDiscount",
  key3 : "offerDiscount", 
  key4 : "offerDiscount", 
  key5 : "offerDiscount", 
  key6 : "offerDiscount", 
  start : data.start_Date, 
  end : data.end_Date, 
  setInputData :  setData})
const radioInputs =   [
    {
    type : "radio",
    span : "col-span-11 md:col-span-2 lg:col-span-1",
    label : "",
    radioInputs : [
      {
        name : "isActive",
        text : "Active",
        value :  true
      },
      {
        name : "isActive",
        text : "Closed",
        value : false
      },
      {
        name : "isActive",
        text : "Both",
        value : "both"
      }
]
},
{
  type : "date",
  name : "start_Date",
  label : "From Date",
  placeholder : "",
  span : "col-span-12 md:col-span-2 lg:col-span-1",
//   showIcon : <FaEye className='text-[#a1a1aa] duration-300' size={15}/>,
//   hideIcon : <FaEyeSlash className='text-[#a1a1aa] duration-300' size={15}/>,
  value : data.start_Date,
//   valid : length,
//   validMsg : MSG.MEETS_PASS_LENGTH,
//   invalidMsg : MSG.NOT_MEETS_PASS_LENGTH
},
{
  type : "date",
  name : "end_Date",
  label : "To Date",
  placeholder : "",
  span : "col-span-12 md:col-span-5 lg:col-span-1",
//   showIcon : <FaEye className='text-[#a1a1aa] duration-300' size={15}/>,
//   hideIcon : <FaEyeSlash className='text-[#a1a1aa] duration-300' size={15}/>,
  value : data.end_Date,
//   valid : match,
//   validMsg : MSG.PASSWORD_MATCH,
//   invalidMsg : MSG.NO_MATCH
},
{
    type : "text",
    name : "search",
    label : "",
    placeholder : "Search",
    span : "col-span-12 md:col-span-2 lg:col-span-1",
    value : data.search,
    icon : <div className={`bg-[rgba(234,232,232,1)] absolute bottom-0 right-0 w-5 h-5 flex justify-center items-center`}><FaSearch className={`${textColors.grayish_blue}`}/></div>
  
},
]

const change = (e : any) => {
  if(e.target.name === "start_Date") dispatch(setStartDate(e.target.value))
  handleChange(e)
}

const displayHeader = () => {
    let headers = ["Sr.no", "Offer Title", "Discount Title", "Start date time", "End date time", "Offer status", "" ]

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
            <tr key={index} className={`${index % 2 !== 0 ? bgColors.white_smoke : ""} border-b h-[50px] text-center body relative text-[#475569]`}>
                <td className="p-2 font-[600] text-start">{offers.srno}</td>
                <td className="p-2 font-[600] text-start">{offers.offerTitle}</td>
                <td className="p-2 font-[600] text-start">{offers.offerDiscount}</td>
                <td className="p-2 font-[600] text-start">{offers.offer_StartTime.split("T")[0]} {convertTo12HourFormat(offers.offer_StartTime.split("T")[1])}</td>
                <td className="p-2 font-[600] text-start">{offers.offer_EndTime.split("T")[0]} {convertTo12HourFormat(offers.offer_EndTime.split("T")[1])}</td>
                <td className="p-2 font-[600] text-start">{isActive(offers.offer_IsActive, offers.offer_EndTime)  ? <span className={`rounded-lg py-1 px-3 ${bgColors.green} ${textColors.white_smoke}`}>Active</span> : <span className={`rounded-lg py-1 px-3 ${bgColors.red} ${textColors.white_smoke}`}>Closed</span>}</td>
                <td className="p-2 font-[600] text-start flex gap-1 justify-center items-center h-[50px]">
                <Button id='view' loaderClasses=''  classes={`text-[10px] md:text-[10px] lg:text-[10px] ${textColors.blue} flex justify-center items-center gap-2 rounded-md`} handleClick={() => navigateToview(offers)} icon={<></>}  content={"View"}/>
                /
                <Button id='edit' loaderClasses=''  classes={`text-[10px] md:text-[10px] lg:text-[10px] ${textColors.blue} flex justify-center items-center gap-2 rounded-md`} handleClick={() => navigateToEdit(offers)} icon={<></>}  content={"Edit"}/>
                </td>
            </tr>
        )
    })
    :
    <NoData classes='w-full absolute w-full h-[300px]' content='No Offers' icon={<FaTable className={`${textColors.blue} text-[13px]`}/>}/>
    :
    <tr className='absolute w-full h-[300px] flex justify-center items-center'>
    <StackLoader length={6}/>
    </tr>
)
}

  return (
    <section className={`rounded-md relative w-full h-full md:mt-0 lg:mt-0 xl:mt-0 shadow-chart px-5 py-3 flex flex-col justify-start items-center gap-3 ${bgColors.white}`}>
     <header className='font-semibold text-[15px] self-start'>Offer Details</header>
     <div className='w-full md:w-[85%] xl:w-[65%] 2xl:w-[40%] flex gap-7 md:gap-3 lg:gap-3 xl:gap-5 flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center static md:absolute lg:absolute xl :absolute 2xl:absolute bottom-[102%] right-0'>
      <Inputs handleChange={change} inputs={radioInputs.slice(0,3) as any} setData={setData} data={data} width='self-end w-full' py='' />
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
      <Inputs handleChange={change} inputs={radioInputs.slice(3,4) as any} setData={setData} data={data} width='self-end w-full' py='' />
     </div>
     <Table displayHeader={displayHeader} displayBody={displayBody}/>  
    </section>
  )
}
