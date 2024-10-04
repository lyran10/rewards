import { useDispatch,useSelector, TypedUseSelectorHook, } from "react-redux";
import { AppDispatch,RootState } from "../store/store"

export const useRedux = () => {
    const dispatch = useDispatch<AppDispatch>()
    const selector: TypedUseSelectorHook<RootState> = useSelector;

const methods = {
    dispatch,
    selector
}
  
  return methods
}