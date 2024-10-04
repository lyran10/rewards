import React from "react"
import { Inputs } from "./inputs"
import { InputTypes } from "../types/types"

type Props = {
    // header : string,
    inputs : any[],
    handleChange : (e: any) => void,
    classes : string,
    children : React.ReactNode,
    handleClick : (e : React.FormEvent, data : InputTypes, setData : React.Dispatch<React.SetStateAction<InputTypes>>) => void,
    data : InputTypes,
    setData : React.Dispatch<React.SetStateAction<InputTypes>>
}

export const Form = ({inputs, handleChange, classes,children, handleClick, data, setData} : Props) => {

  return (
    <form className={classes} onSubmit={(e) => handleClick(e, data, setData)}>
       <Inputs inputs={inputs} width="w-full" py="py-1" handleChange={handleChange} data={data} setData={setData}/>
       { children }
    </form>
  )
}
