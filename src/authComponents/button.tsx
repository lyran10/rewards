import React from 'react'
import { useRedux } from '../customHooks/useRedux'
import { Loader } from '../commonComponents/loader'

type Props = {
    icon : JSX.Element,
    classes : string,
    content : string,
    handleClick? : (e : React.FormEvent) => void,
    loaderClasses : string,
    id : string,
    handleButtonClick? : (e : React.MouseEvent<HTMLButtonElement>) => void,
}

export const Button = ({classes, icon, content, handleClick, loaderClasses, id } : Props) => {
  const {selector} = useRedux()
  const { btnLoader } = selector(state => state.loginData)

  return (  
    <button id={id} onClick={handleClick} className={`${classes} rounded-md flex justify-center items-center gap-2`}>
      {
        btnLoader && ( id === "reg" || id === "login" || id === "addOffer" || id === "confirm")
        ?
        <Loader classes={`${loaderClasses}`}/>
        :
        <>
          {content}
          {icon}
        </>
      }
      {/* { id === "logout" ? <ConfirmLogout/>  : null } */}
    </button>
  )
}
