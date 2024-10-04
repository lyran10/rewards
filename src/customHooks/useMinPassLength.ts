import {useEffect, useState} from 'react'
import { LENGTHS } from '../types/constants'

type Props = {
    value : string | undefined
}

export const useMinimumPassLength = ({ value } : Props) => {
const [length, setLength] = useState<boolean>(false)

useEffect(() => {
    setLength(() => value && value.length >= LENGTHS.PASS_MIN_LENGTH ? false : true)
},[value])

  return { length }
}