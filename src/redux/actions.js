import {types} from './types'

// 모든 항목 불러오기
export const getListAll = (jsonData) => ({
    type:types.GET_LIST_ALL,
    list:jsonData
});

// KIND1 
export const getListKind1 = (kindname) => ({
    type:types.GET_LIST_KIND1,
    kind:kindname
});

// KIND2 
export const getListKind2 = (kinds) => ({
    type:types.GET_LIST_KIND2,
    kinds:kinds
});

export const actions = {
    getListAll,
    getListKind1,
    getListKind2
}