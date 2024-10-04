import React from "react"
import { useColors } from '../../../customHooks/useColors'

type Props = {
    data : any
}

export const Cards = ({data} : Props) => {
const {textColors} = useColors()
const card = [
    {
        id : "active",
        header : "Active Offers",
        value : data && data.activeOffer || 0,
        color : textColors.green
    },
    {
        id : "expiresIn",
        header : "Expires In 2 days",
        value : data && data.expiresIn2Days || 0,
        color : textColors.orange
    },
    {
        id : "expired",
        header : "Offers Expired",
        value : data && data.expired || 0,
        color : textColors.red
    }
]
  return (
    <div className='flex justify-around items-center'>
        {
            card.map(({id, header, value, color}) => {
                return(
                    <div key={id} className='flex justify-center items-center flex-col gap-0 font-semibold'>
                        <span className={`${color} text-[20px]`}>{value}</span>
                        <span className={`${textColors.grayish_blue} text-[12px]`}>{header}</span>
                    </div>
                )
            })
        }
    </div>
  )
}
