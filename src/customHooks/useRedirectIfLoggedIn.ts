import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSession } from './useSession'

export const useRedirectIfLoggedIn = () => {
  const navigate = useNavigate()
  const {getValue} = useSession()

  useEffect(() => {
      if(getValue() !== null) navigate("cms/dashboard/home")   
  },[])

  return 
}