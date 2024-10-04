import { useEffect } from 'react'
import { useSession } from './useSession'
import { useNavigate } from 'react-router-dom'
import { useRedux } from './useRedux'
import { removeUserDetails, setInputError, setMsg } from '../store/reducer'

export const useAuthentication = () => {
const { handleSession } = useSession()
const navigate = useNavigate()
const {selector, dispatch} = useRedux()
const { userDetails } = selector(state => state.apiData)

    const Authentication = async() => {      
        try {
          if (userDetails) {
              handleSession(userDetails);
              dispatch(removeUserDetails(null));
              dispatch(setInputError(false))
              navigate("cms/dashboard/home")
          }         
        } catch (error) {
            dispatch(setMsg({status : "error", content : "Something went wrong try later."}));
        }
      };
      
      useEffect(() => {
        Authentication();
      }, [userDetails]);

  return 
}