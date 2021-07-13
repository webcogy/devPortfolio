import {types} from './types'

export const getListAll = (jsonData) => ({
    type:types.GET_LIST_ALL,
    list:jsonData
});

export const actions = {
    getListAll,
}