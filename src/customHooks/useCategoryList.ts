import React,{useState, useEffect} from 'react'
import { useRedux } from './useRedux'

type Props = {
    fetchList : any,
    id? : string
}
// categoryList
export const useCategoryList = ({fetchList, id} : Props) => {
    const {dispatch} = useRedux()
    const [list, setList] = useState<any>([])

    const getList = async() => {
        if(id){
            const data = await dispatch(fetchList(id) as any)
            setList(data.payload) 
        }else{
            const data = await dispatch(fetchList() as any)
            setList(data.payload)
        }

    }

    useEffect(() => {
        getList()
    },[id])

  return  list 
}
