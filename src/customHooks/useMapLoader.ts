import React, { useState } from 'react'

export const useMapLoader = () => {
const [loader, setLoader] = useState<boolean>(false)

    const showLoader = () => setLoader(true)

    const removeLoader = () => setLoader(false)

  return {loader, showLoader, removeLoader}
}
