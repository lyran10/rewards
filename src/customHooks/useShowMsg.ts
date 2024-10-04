import { useState, useEffect } from 'react'
import { setMsg } from '../store/reducer'
import { useRedux } from './useRedux'

export const useShowMsg = () => {
    const {selector} = useRedux()
    const msg = selector(state => state.apiData.msg)
    const [show, setShow] = useState<boolean>(false)
  
    useEffect(() => {
      if(msg.status){
        setShow(true)
        let showTimer = setTimeout(() => { setShow(false) },4000)
        let msgTimer = setTimeout(() => { setMsg({status : "", content : ""}) },4500)
  
       return () =>{
        clearTimeout(showTimer)
        clearTimeout(msgTimer)
       }  
      }
    },[msg])


  return { msg, show }
}