import React from "react"

type Props = {
    classes : string
  }
  
  export const Loader = ({classes} : Props) => {
      return (
        <div className={`m-auto ${classes} flex justify-center items-center before:content-'' before:absolute before:rounded-full before:bg-transparent before:border-[5px] before:border-t-[#94a3b8] before:animate-spin`} ></div>
      )
    }
  