import React, {useState} from 'react'
import { useRedux } from './useRedux'
import { setPopoverId } from '../store/reducer'

export const usePopOver = () => {
const {dispatch} = useRedux()
const [show, setShow] = useState<boolean>(false)

const handlePopOverShow = (id : string) => {
    dispatch(setPopoverId(id))
    setShow(true)
}

const handlePopOverClose = () => {
    setShow(false)
    dispatch(setPopoverId(""))
}

  return {show, handlePopOverShow, handlePopOverClose}
}
