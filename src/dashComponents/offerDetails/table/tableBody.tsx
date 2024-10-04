import React from 'react'

type Props = {
    displayBody : () => any
}

export const TableBody = ({displayBody} : Props) => {
   
  return (
    <tbody  className='text-[10px] md:text-[10px] lg:text-[12px] relative top-1 h-full w-full'>
        { displayBody() }
    </tbody>
  )
}
