import { useEffect, useState } from 'react'
import { useRedux } from './useRedux'
import { useSession } from './useSession'
import { getClaimOffers } from '../store/actions'

export const useGetClaimOffers = () => {
  const {dispatch} = useRedux()
  const {getValue} = useSession()
  const [loading, setLoading] = useState<boolean>(false)
  const [claimOffers, setClaimOffers] = useState<any[]>([])

  const fetchOffers = async() => {
  setLoading(true)
  const {payload : {subCatClaimHistory}} = await dispatch(getClaimOffers(getValue().id))
  setClaimOffers(subCatClaimHistory)
  setLoading(false)
  }

  useEffect(() => {
    fetchOffers()
  },[])

  return {claimOffers, loading}
}