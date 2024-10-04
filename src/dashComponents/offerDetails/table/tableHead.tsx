import React from 'react'

type Props = {
    displayHeader : () => JSX.Element[] | undefined
}

export const TableHead = ({displayHeader} : Props) => {
  // after:absolute after:content-"" after:bg-[#94a3b8] after:w-full after:h-[1px] after:top-0
  return (
    <thead className={`sticky top-0 z-[1000] bg-white h-[40px] before:absolute before:content-"" before:bg-[#cbd5e1] before:w-full before:h-[1px] before:bottom-0 after:absolute after:content-"" after:bg-[#cbd5e1] after:w-full after:h-[1px] after:top-0`}>
                <tr className='w-full relative left-0'>
                    { displayHeader() }
                </tr>
     </thead>
  )
}
