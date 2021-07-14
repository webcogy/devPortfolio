import {types} from './types'
import {states} from './states'
import { combineReducers } from 'redux';

const listReducer = (state = states.listState, action) => {
    switch (action.type) {
        case types.GET_LIST_ALL:
            return{
                ...state,
                list:action.list
            };
        case types.GET_LIST_KIND1:
            return{
                ...state,
                list_kind2:[],
                list_kind1: action.kind === 'ALL' 
                        ? state.list
                        : state.list.filter(list=> list.kind1 === action.kind)
            };
        case types.GET_LIST_KIND2:
            return{
                ...state,
                list_kind2: action.kinds
            }
        default:
            return state; // 기본 값 설정. 파라미터가 undefiend인 경우를 대비
    }
}


export const reducers = combineReducers({
    listStates:listReducer,
})