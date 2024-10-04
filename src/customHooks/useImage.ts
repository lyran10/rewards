import { useRedux } from './useRedux';
import { setImgLoading } from '../store/reducer';

export const useImage = () => {
  const {dispatch} = useRedux()

  const handleImageLoad = () => {
    dispatch(setImgLoading(false));
  };

  const handleImageError = () => {
    dispatch(setImgLoading(false));
  };

  return {handleImageError, handleImageLoad}
}
