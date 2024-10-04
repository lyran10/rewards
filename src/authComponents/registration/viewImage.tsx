import React from 'react'
import { Loader } from '../../commonComponents/loader'
import { useImage } from '../../customHooks/useImage'
import { useRedux } from '../../customHooks/useRedux'
import { ClosePopOverButton } from '../closePopOverButton'

type Props = {
    handleClick : () => void,
    image : string | null,
    classes : string,
}

export const ViewImage = ({handleClick, image, classes} : Props) => {
  const {selector} = useRedux()
  let {handleImageError, handleImageLoad} = useImage()
  const {imgLoader} = selector(state => state.data)

  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-2 relative'>
      {
        imgLoader ? <Loader classes='w-5 h-5 before:w-6 before:h-6 absolute'/> : null
      }
      <img onError={handleImageError} onLoad={handleImageLoad} className={`${classes}`} src={image || ""} alt="" />
       <ClosePopOverButton handlePopOverClose={handleClick} />
  </div>
  )
}
