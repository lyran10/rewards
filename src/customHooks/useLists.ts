import React from 'react'
import { useCategoryList } from './useCategoryList'
import { categoryList, DistrictList, DivisionList, StateList, ULBList } from '../store/actions'
import { InputTypes } from '../types/types'

type Props = {
    data : InputTypes
}

export const useLists = ({data} : Props) => {
    const  catList  = useCategoryList({fetchList : categoryList})
    const  sList = useCategoryList({fetchList : StateList})
    const  divList = useCategoryList({fetchList : DivisionList, id : data.stateid})
    const  disList = useCategoryList({fetchList : DistrictList, id : data.divid})
    const  ulbList = useCategoryList({fetchList : ULBList, id : data.disid})
  return {catList, sList, divList, disList, ulbList}
}
