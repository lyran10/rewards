import {useState, useEffect} from 'react'
import { useRedux } from './useRedux'
import { getDashboardDetails } from '../store/actions'
import { useSession } from './useSession'

type DashDetails = {
  offerData : {activeOffer: number, expiresIn2Days: number, expired: number, offerdetailsLists: any[]}
  todayStatus : {redeemCount: number, claimCount: number},
  lastSenvenDayRedeem : {redeemDayName: string, redeemDate: string, redeemCount: number}[]
  lastSenvenDayClaim : {claimDayName: string, claimDate: string, claimCount: number}[]
  lastMonthRedeem : {redeemDayName: string, redeemDate: string, redeemCount: number}[]
  lastMonthClaim : {claimDayName: string, claimDate: string, claimCount: number}[]
}

export const useGetDashboardDetails = () => {
  const {dispatch} = useRedux()
  const {getValue} = useSession()
  const [loading, setLoading] = useState<boolean>(false)
  const [dashDetails, setDashDetails] = useState<DashDetails>({} as DashDetails)

  const fetchOffers = async() => {
  setLoading(true)
  const {payload} = await dispatch(getDashboardDetails(getValue().id))

  setDashDetails({
    ...dashDetails, 
    offerData : payload.offerData,
    todayStatus : payload.todayStatus,
    lastSenvenDayRedeem : payload.lastSenvenDayRedeem,
    lastSenvenDayClaim : payload.lastSenvenDayClaim,
    lastMonthRedeem : payload.lastMonthRedeem,
    lastMonthClaim : payload.lastMonthClaim
  })
  setLoading(false)
  }

  useEffect(() => {
    fetchOffers()
  },[])

  return {dashDetails, loading}
}
