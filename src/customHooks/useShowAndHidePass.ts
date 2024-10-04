import { useState } from 'react'

export const useShowAndHidePass = () => {
    const [show,setShow] = useState<{password :  boolean, confirmPassword : boolean}>({} as {password :  boolean, confirmPassword : boolean})
    const [id,setId] = useState<string>("")
    const [showPass,setShowPass] = useState<boolean>(false)

    const showMsg = (name : string) => {
      setShowPass(true)
      setId(name)
    }

     const removeMsg = () => {
      setShowPass(false)
      setId("")
    }

    const clickShow = (name : keyof {password :  boolean, confirmPassword : boolean}) => {
      setShow(show => ({...show, [name] : show[name] ? false : true}))
    }

  return {show, showPass, id,showMsg, removeMsg, clickShow}
}
