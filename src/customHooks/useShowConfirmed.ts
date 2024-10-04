import React, {useState} from 'react'

export const useShowConfirmed = () => {
 const [confirmed, setConfirmed] = useState<boolean>(false)

 const handleShowConfirmed = () => {
    setConfirmed(true)
 }

 const handleRemoveConfirmed = () => {
    setConfirmed(false)
 }

  return {confirmed, handleShowConfirmed, handleRemoveConfirmed}
}
