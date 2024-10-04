import React, { useState } from 'react';
import { InputTypes } from '../types/types';
import { useRedux } from './useRedux';
import { setMsg } from '../store/reducer';

type Props = {
    data : InputTypes,
    setData : React.Dispatch<React.SetStateAction<InputTypes>>
}

export const useDragFile = ({data, setData} : Props) => {
    const {dispatch} = useRedux()
    const [dragActive, setDragActive] = useState(false);

    const handleDragEnter = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(true);
    };
  
    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
    };
  
    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(true);
      // Optionally, you can set the effect to copy
      e.dataTransfer.dropEffect = 'copy';

      
    };
  
    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
  
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        const validFiles = Array.from(files).filter(file =>
            file.type === 'image/png' || file.type === 'image/jpeg'
          );

     if (validFiles.length > 0) setData({...data, draggedImage : validFiles[0], logo : ""})
     else dispatch(setMsg({status : "error", content : "Only png, jpg are supported."}))   
      }
    };

  return {handleDragEnter, handleDrop, handleDragOver, handleDragLeave, dragActive}
}
