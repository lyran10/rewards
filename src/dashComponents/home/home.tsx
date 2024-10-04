import React from "react"
import { DisplayWeekBarChart } from './charts/displayWeekBarChart'
import { DisplayOfferDetailsTable } from './offerDetailsTable/displayOfferDetailsTable'
import { DisplayPieChart } from './charts/displayPieChart'
import { DisplayTotalMonthChart } from './charts/displayTotalMonthChart'
import { useGetDashboardDetails } from '../../customHooks/useGetDashboardDetails'

export const Home = () => {
    const {dashDetails, loading} = useGetDashboardDetails()

  return (
  <>
    <div className='w-full h-full flex justify-center items-center gap-3 flex-col'>
        <div className='w-full h-full md:h-[67%] lg:h-[67%] xl:h-[67%] flex justify-center items-center gap-3 flex-col md:flex-row lg:flex-row xl:flex-row'>
            <DisplayOfferDetailsTable data={dashDetails.offerData} loading={loading}/>
            <div className='reltive  z-[10] h-full w-full md:w-[50%] lg:w-[50%] xl:w-[50%] flex gap-3 flex-col md:flex-row lg:flex-row xl:flex-row'>
            <DisplayPieChart data={dashDetails.todayStatus}/>
            <div className='w-full md:w-[55%] lg:w-[60%] xl:w-[70%] h-full flex gap-3 flex-col'>
                <DisplayWeekBarChart loader={loading} keys={{name : "redeemDayName",date: "redeemDate", count :"redeemCount"}} header='Total Redeem' data={dashDetails.lastSenvenDayRedeem} BarChartColor='#62BBAB'/>
                <DisplayWeekBarChart loader={loading} keys={{name : "claimDayName",date: "claimDate", count :"claimCount"}} header='Total Claim'  data={dashDetails.lastSenvenDayClaim} BarChartColor='#8E8CF6'/>
            </div>
        </div>
    </div>
    <div className='relative z-[11] w-full h-full md:h-[30%] lg:h-[30%] xl:h-[30%] flex justify-center items-center gap-3 flex-col md:flex-row lg:flex-row xl:flex-row'>
        <DisplayTotalMonthChart loader={loading} content='Total Redeem of the month' keys={{name : "redeemDayName",date: "redeemDate", count :"redeemCount"}} header='Total Redeem' data={dashDetails.lastMonthRedeem} BarChartColor='#62BBAB'/>
        <DisplayTotalMonthChart loader={loading} content='Total Claim of the month' keys={{name : "claimDayName",date: "claimDate", count :"claimCount"}} header='Total Claim'  data={dashDetails.lastMonthClaim} BarChartColor='#8E8CF6'/>
    </div>
</div>
</>
  )
}
