import {useEffect} from 'react'
import { useRedux } from './useRedux'
import { useLocation } from 'react-router-dom'
import { setHeader, setSubHeader } from '../store/reducer'

export const useSetHeader = () => {
const location = useLocation()
const {dispatch} = useRedux()

const capitalizeFirstLetter = (header : string) => {
    let letter = header.charAt(0).toUpperCase()
    return letter + header.slice(1)
}

    useEffect(() => {
        let headers = location.pathname.split("/")

        dispatch(setHeader(capitalizeFirstLetter(headers[headers.length - 2])))
        dispatch(setSubHeader(capitalizeFirstLetter(headers[headers.length - 1])))

    },[location])

  return
}
