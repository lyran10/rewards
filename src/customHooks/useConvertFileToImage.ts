import React,{useState} from 'react'
import { useRedux } from './useRedux'
import { InputTypes } from '../types/types'

type Props = {
    data? : InputTypes | undefined
    file : any
}

export const useConvertFileToImage = ({data, file} : Props) => {
    const {selector} = useRedux()
    // const {editOffer} = selector(state => state.data)
    const [imagePreview, setImagePreview] = useState<string | null>(null);
  
    const handleImageChange = () => {

        // const file = event.target.files?.[0]; // Get the selected file
        if(data && data.logo && typeof(data.logo) === "string"){
            setImagePreview(data ? data.logo : "")
        }else{
            if (file && file.type.startsWith('image/')) {
              
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImagePreview(reader.result as string);
                };
                reader.readAsDataURL(file); // Read the file as a data URL
            } else {
                alert('Please select a valid image file.');
            }

        }
     
    };

  return {imagePreview, handleImageChange}
}
