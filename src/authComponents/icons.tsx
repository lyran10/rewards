import React from "react"
import { FaStar, FaCreditCard, FaGifts, FaCoins, FaTrophy, FaMedal } from "react-icons/fa6";
import { useMouseFollower } from '../customHooks/useMouseFollower';

export const Icons = () => {
  const { transform } = useMouseFollower({num : 60})
  const icons = [
    {
      icon : <FaStar style={{ transform, transition: 'transform 0.1s ease-in-out'}} className='icon absolute z-[1000] text-[#facc15] top-[10%] right-[20%]' size={20}/>
    },
    {
      icon : <FaCreditCard style={{ transform, transition: 'transform 0.1s ease-in-out'}} className='icon absolute z-[1000] text-[#dc2626] bottom-[10%] right-[5%]' size={20}/>
    },
    {
      icon : <FaGifts style={{ transform, transition: 'transform 0.1s ease-in-out'}} className='icon absolute z-[1000] text-[#6b21a8] top-[10%] left-[3%]' size={20}/>
    },
    {
      icon : <FaCoins style={{ transform, transition: 'transform 0.1s ease-in-out'}} className='icon absolute z-[1000] text-[#facc15] bottom-[3%] left-[20%]' size={20}/>
    },
    {
      icon : <FaTrophy style={{ transform, transition: 'transform 0.1s ease-in-out'}} className='icon absolute z-[1000] text-[#082f49] bottom-[50%] left-[5%]' size={20}/>
    },
    {
      icon : <FaMedal style={{ transform, transition: 'transform 0.1s ease-in-out'}} className='icon absolute z-[1000] text-[#082f49] bottom-[70%] right-[2%]' size={20}/>
    },
  ]

  return (
    <div className=''>
      {
       icons.map(({icon}, index) => {
        return <span key={index}>{icon}</span>
       })
      }
    </div>
  )
}