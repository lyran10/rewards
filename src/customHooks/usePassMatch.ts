import {useEffect, useState} from 'react'
import { InputTypes } from '../types/types'

type Props = {
    data : InputTypes
}

export const usePassMatch = ({ data } : Props) => {
const [match, setMatch] = useState<boolean>(false)

useEffect(() => {
    setMatch(() => data.password === data.confirmPassword ? false : true)
},[data])

  return { match }
}