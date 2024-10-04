import React from 'react'
import { Inputs } from '../../authComponents/inputs'
import { InputTypes } from '../../types/types'

type Props = {
    handleChange : (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
    data : InputTypes,
    setData : React.Dispatch<React.SetStateAction<InputTypes>>,
    inputs : any[]
}

export const SearchFilter = ({handleChange, data, setData, inputs} : Props) => {

  return (
    <Inputs inputs={inputs} width="w-[40%]" py="py-1" handleChange={handleChange} data={data} setData={setData}/>
  )
}
