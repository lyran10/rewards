import React from 'react'
import { InputTypes } from '../types/types'

type Props = {
    data : InputTypes
    handleChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
    type : string,
    radioInputs : any[],
    setData : React.Dispatch<React.SetStateAction<InputTypes>>,
}

export const Radio = ({data, handleChange, type, radioInputs} : Props) => {

const change = (e : React.ChangeEvent<HTMLInputElement>) => handleChange(e)

return (
     <fieldset className='flex gap-5 justify-start items-center text-[13px]'>
        {
            radioInputs.map(({text, value, name}) => {
                return(
                    <fieldset key={text} className='flex justify-center items-center gap-1'>
                        <input className='accent-[#1E7BAE]' onChange={change}  type={type} name={name} value={value} checked={data[name as keyof InputTypes] === `${value}` ? true : false}/>
                        <span>{text}</span>
                    </fieldset>
                )
            })
        }
    </fieldset>
  )
}