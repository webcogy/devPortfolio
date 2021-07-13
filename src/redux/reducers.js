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
        default:
            return state; // 기본 값 설정. 파라미터가 undefiend인 경우를 대비
    }
}


export const reducers = combineReducers({
    listStates:listReducer,
})