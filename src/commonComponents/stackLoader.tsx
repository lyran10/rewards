import React from "react"

type Props = {
    length : number
}

export const StackLoader = ({length} : Props) => {
let stack = Array.from({ length: length })

  return (
    <td className='h-full flex flex-col w-full gap-2'>
        {
         stack.map((num, index) => {
            return(
                <div key={index} className='h-[50px] bg-slate-200 animate-pulse'></div>
            )
         })
        }
        {/* <div className="shadow-left-to-right h-full animate-pulse bg-slate-200"></div> */}
    </td>
  )
}
