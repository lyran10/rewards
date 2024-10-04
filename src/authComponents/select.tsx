import React from 'react'
import { useColors } from '../customHooks/useColors'
import { useRedux } from '../customHooks/useRedux'
import { InputTypes } from '../types/types'

type Props = {
    setData : React.Dispatch<React.SetStateAction<InputTypes>>,
    data :InputTypes
    selectData : any[],
    handleChange : (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void
    width : string,
    value : string,
    name : string,
    content : string,
    id : string
}

export const Select = ({setData, data, selectData, handleChange, width, value, name, content, id } : Props) => {
    const {selector} = useRedux()
    const {inputError} = selector(state => state.loginData)
    const { textColors } = useColors()

    const change = (e : React.ChangeEvent<HTMLSelectElement>) => {
      let name = e.currentTarget.name
      let value = e.currentTarget.value
      if(name === "stateid" && value === ""){  return setData({...data, stateid : "", divid : "", disid : "",appid : ""})}
      if(name === "divid" && value === ""){  return setData({...data, divid : "", disid : "", appid : ""})}
      if(name === "disid" && value === ""){  return setData({...data, disid : "", appid : ""})}
      handleChange(e)
    }

  return (
    <select name={id || ""} value={value} onChange={(e) => change(e)} className={`py-1 w-full border-b ${inputError && data[id as keyof InputTypes] === "" ? "border-[#dc2626]" : "border-[#ddd6fe]"} outline-none ${textColors.grayish_blue} ${width}`}>
    <option value="">{selectData && selectData.length ? content : `No ${content}`}</option>
  {
      selectData.map((item,index) => {
          return(
            selectData.length
              ?
              <option id={id} key={index} value={item[id]}>{item[name]}</option>
              :
              <option id={id} key={name} value={""}>No {content}</option>
          ) 
      })
  }
</select>
  )
}