import React from 'react'

type Props = {
    children : React.ReactNode,
    bg : string,
    animation? : string,
    width : string
}

export const PopOver = ({children, bg, animation, width} : Props) => {
  return (
    <main className={`${width} h-full z-[10000] top-0 absolute flex justify-center items-center ${bg} ${animation}`}>
        {children}
    </main>
  )
}
