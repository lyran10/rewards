import React from 'react'
import { TableBody } from "./tableBody"
import { TableHead } from "./tableHead"

type Props = {
    displayHeader : () => JSX.Element[]
    displayBody : () => any
}

export const Table = ({displayHeader, displayBody} : Props) => {

  return (
    <div id={"table-to-xlsx"} className={`w-full overflow-x-auto overflow-y-scroll h-full text-start px-2 rounded-md bg-white`}>
     <table className='w-full text-[12px]'>
      <TableHead displayHeader={displayHeader}/>
      <TableBody displayBody={displayBody}/>
    </table>
    </div>
 
  )
}
