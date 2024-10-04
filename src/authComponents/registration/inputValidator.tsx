import React from "react";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa6";
import { InputTypes } from "../../types/types";


type Props = {
    valid : boolean | undefined,
    validMessage : string,
    inValidMessage : string,
    key2 : string,
    data : InputTypes
  }

export const InputValidator = ({valid, data, inValidMessage, validMessage, key2} : Props) => {
    return (
        <span className={`flex justify-center items-center absolute bottom-[100%] right-1 text-[11px] duration-300 ${ data[key2 as keyof InputTypes] ? `opacity-[1] translate-y-0 ${valid ? "text-red-600" : "text-green-600"}` : `opacity-[0] translate-y-10`}`}>
          <span>{!valid ? validMessage : inValidMessage} </span>
          {valid ? <FaExclamation/> :  <TiTick/>}
        </span>
      )
}