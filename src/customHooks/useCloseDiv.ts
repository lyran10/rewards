import { useRef, useEffect } from 'react'
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useRedux } from './useRedux'

type Props = {
    show : boolean,
    setLogoutConfirm : ActionCreatorWithPayload<any, "State/setLogoutPopup">
}

export const useCloseDiv = ({show, setLogoutConfirm} : Props) => {
const divRef = useRef<HTMLDivElement>(null)
const {dispatch} = useRedux()

const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)){
      dispatch(setLogoutConfirm(false))
    }  
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [show]);

  return { divRef }
}