import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from './useSession'
import { useRedux } from './useRedux'

export const useRedirectIfNotLoggedIn = () => {
  const {selector} = useRedux()
//   const status = selector(state => state.loginData.status)
  const navigate = useNavigate()
  const {getValue} = useSession()

  useEffect(() => {
    if(getValue() === null) navigate("/")
  },[])

  return 
}