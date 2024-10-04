import {useEffect, useState} from 'react'
import { InputTypes } from '../types/types'
import { useValidation } from './useValidation'
import { useRedux } from './useRedux'
import { setMsg } from '../store/reducer'

type Props = {
    id : string
    inputData : InputTypes
    setInputData : React.Dispatch<React.SetStateAction<InputTypes>>
    data : any[],
    value : string,
    key1 : string,
    key2 : string,
    key3 : string,
    key4 : string,
    key5 : string,
    key6 : string,
    start? : string,
    end? : string
} 

export const useFilter = ({id, inputData, data, value, key1, key2, key3, key4, key5, key6, start, end, setInputData} : Props) => {
const [filtered, setFiltered] = useState<any[]>([])
const {dateFilterValidation} = useValidation()
const {dispatch} = useRedux()

const dateFormat = (date : string) => {
  let newDate = date.split(" ")[0]
  let splitNewDate = newDate.split("/")
  return new Date(`${splitNewDate[2]}-${splitNewDate[1]}-${splitNewDate[0]}`)
}

const filterValues = () => {
  return [...data.filter((item) => 
    item[key1].toLowerCase().includes(value.toLowerCase()) || 
    item[key2].toLowerCase().includes(value.toLowerCase()) ||
    item[key3].toLowerCase().includes(value.toLowerCase()) ||
    item[key4].toLowerCase().includes(value.toLowerCase()) ||
    item[key5].toLowerCase().includes(value.toLowerCase()) ||
    item[key6].toLowerCase().includes(value.toLowerCase())
  )]
}

const InsertSerialNo = () => {
  return [...filterValues().reduce((acc, pre, index) => { return [...acc,{...pre, srno : index+ 1}] }, [])]
}

const filterRedeemClaim = (str : string) => {
  setFiltered(() => 
    [...InsertSerialNo().
      filter((item : any) =>{
       let date = dateFormat(item[str])
       return date  >= new Date(start || "") && date <= new Date(end || "")
      } )
])
}

const filterByValueAndDate = () => {
  if(id === "details"){
    setFiltered(() => 
      [...InsertSerialNo().
      filter((item : any) => {
       return new Date(start || "") <= new Date(item.offer_EndTime.split("T")[0]) && new Date(end || "")  >= new Date(item.offer_StartTime.split("T")[0])
      })  
  ])
    return
  }

  if(id === "redeem"){
    filterRedeemClaim("redeemDatetime")
    return
  }

  if(id === "claim"){
    filterRedeemClaim("claimDatetime")
    return
  }
}

useEffect(() => {
  if(data && data.length){
    if(value){
      if(start && end) filterByValueAndDate()
      else setFiltered(() => [...InsertSerialNo()])
    }else{
      if(start && end) filterByValueAndDate()
      else setFiltered(data.reduce((acc, pre, index) => { return [...acc,{...pre, srno : index+ 1}] }, []))
    }
  }else setFiltered([])
  },[data, value])


const filterDate = () =>{
if(!dateFilterValidation(inputData)){
  dispatch(setMsg({status : "error", content : "Select Date Range."}))
  return
}

filterByValueAndDate()
} 

const removeFilterDate = () => {
  setFiltered(() => 
    [...InsertSerialNo()])
    setInputData((data) => { return {...data, start_Date : "", end_Date : ""} } )
}
  
  return { filterDate, filtered, removeFilterDate }
}



  //   setFiltered(() => 
  //     [...data.reduce((acc, pre, index) => { return [...acc,{...pre, srno : index+ 1}] }, []).
  //     filter((item : any) => new Date(item.claimDatetime)  >= new Date(start || "")  && new Date(item.claimDatetime) <= new Date(end || "") )  
  // ])


  // const filterByDate = () => {
//   if(id === "details"){
//     setFiltered(() => 
//       [...data.reduce((acc, pre, index) => { return [...acc,{...pre, srno : index+ 1}] }, []).
//       filter((item : any) => new Date(start || "") <= new Date(item.offer_EndTime) && new Date(end || "")  >= new Date(item.offer_StartTime))  
//   ])
//     return
//   }

//   if(id === "redeem"){
//     filterRedeemClaim("redeemDatetime")
//     return
//   }

//   if(id === "claim"){
//     filterRedeemClaim("claimDatetime")
//     return
//   }
   
// }