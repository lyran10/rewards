import { useState, useEffect} from 'react'

type Props = {
  location : {lat : number, lon : number} | null
}

export const useGetCoords = ({ location } : Props) => {
const [coordinates, setCoords] = useState<{lat : string | number, lon : string | number}>({lat : 0, lon : 0})

useEffect(() => {
 if(location) setCoords(location)
},[location])

const handleCoords = (coords : {lat : string | number, lon : string | number}) => {
    setCoords(coords)
}

  return {coordinates, handleCoords}
}
