import { useEffect, useState } from 'react'
import { useRedux } from './useRedux'
import { useSession } from './useSession'
import { getRedeemOffers } from '../store/actions'

export const useGetRedeemOffers = () => {
  const {dispatch, selector} = useRedux()
  const {confirmClaim} = selector(state => state.data)
  const {getValue} = useSession()
  const [loading, setLoading] = useState<boolean>(false)
  const [redeemOffers, setRedeemOffers] = useState<any[]>([])

  const fetchOffers = async() => {
  setLoading(true)
  const {payload : {subCatRedeemHistory}} = await dispatch(getRedeemOffers(getValue().id))
  setRedeemOffers(subCatRedeemHistory)
  setLoading(false)
  }

  useEffect(() => {
    if(!confirmClaim) fetchOffers()
  },[confirmClaim])

  return {redeemOffers, loading}
}
