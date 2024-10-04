import {useState, useEffect} from 'react'
import { useRedux } from './useRedux'
import { getOfferDetails } from '../store/actions'
import { useSession } from './useSession'

export const useGetOfferDetails = () => {
  const {dispatch} = useRedux()
  const {getValue} = useSession()
  const [loading, setLoading] = useState<boolean>(false)
  const [offerDetails, setOfferDetails] = useState<any[]>([])

  const fetchOffers = async() => {
  setLoading(true)
  const {payload : {data : data}} = await dispatch(getOfferDetails(getValue().id))
  setOfferDetails(data)
  setLoading(false)
  }

  useEffect(() => {
    fetchOffers()
  },[])

  return {offerDetails, loading}
}
