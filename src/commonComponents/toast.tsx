import React from "react"
import { SiTicktick } from "react-icons/si";
import { FaExclamation } from "react-icons/fa6";
import { Avatar } from "./avatar";
import { useShowMsg } from "../customHooks/useShowMsg";

export const Toast = () => {
  const { msg, show } = useShowMsg()

  // 75d00f
  return (
    <div className={`flex gap-3 absolute right-0 top-10 w-[250px] p-3 ${msg.status === "error" ? "bg-[#f33950]" : "bg-[#16a34a]"} ${show ? "translate-x-0" : "translate-x-[500px]"} z-[20000] text-white rounded-l-md duration-300`}>
      <div className='w-[20%] flex justify-center items-center'>
      <Avatar shadow="shadow-chart" bg="" position="" width="w-8" height="h-8" icon={ msg.status === "error" ? <FaExclamation className='text-[#e8e8e8]' size={15}/>: <SiTicktick className='text-[#e8e8e8]' size={15}/>}/>
      </div>
      <div className='w-[80%] text-[15px]'>
        <header>{msg.status === "error" ? "Error" : "Success"}</header>
        <span className='text-[13px]'>{msg.content}</span>
      </div>
    </div>
  )
}