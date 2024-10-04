import React from 'react'
import { useDragFile } from '../customHooks/useDragFile'
import { InputTypes } from '../types/types'
import { useColors } from '../customHooks/useColors'
// import { useRedux } from '../customHooks/useRedux'

type Props = {
    data : InputTypes,
    setData : React.Dispatch<React.SetStateAction<InputTypes>>
}

export const DragUpload = ({data, setData} : Props) => {
// const {selector} = useRedux()
// const {inputError} = selector(state => state.loginData)
const {handleDragEnter, handleDrop, handleDragOver, handleDragLeave, dragActive} = useDragFile({data, setData})
const {textColors} = useColors()
// inputError ? '2px solid #dc2626'
  return (
    <div
    onDragEnter={handleDragEnter}
    onDragLeave={handleDragLeave}
    onDragOver={handleDragOver}
    onDrop={handleDrop}
    style={{
      border: '2px solid #94a3b8',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: dragActive ? '#f0f4f8' : '#ffffff',
      width : "100%"
    }}
  >
    <p className={`${textColors.grayish_blue} text-[12px]`}>{dragActive ? 'Drop the files here...' : 'Drag & drop file here'}</p>
  </div>
  )
}
