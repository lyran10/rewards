import {useEffect, useState} from 'react'
import { isActive } from '../dashComponents/offerDetails/offerDetails'

type Props = {
value : string | boolean
data : any[]
}

export const useRadioFilter = ({value, data} : Props) => {
  const [radioFilter,setRadioFilter] = useState<any[]>([])

  useEffect(() => {
    if(data && data.length){
      if(value === "true"){
        setRadioFilter([...data.filter((item) => isActive(item.offer_IsActive, item.offer_EndTime) === true)])
      }else if(value === "false"){
        setRadioFilter([...data.filter((item) => isActive(item.offer_IsActive, item.offer_EndTime) === false)])
      }else{
        setRadioFilter([...data])
      }
    }
  },[value, data])

  return {radioFilter}
}
