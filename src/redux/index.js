// root reducer.   counter 와 todos를 여기서 합친다
import { combineReducers } from 'redux';
import list from './list';

const rootReducer = combineReducers({
    list,
    // counter,
})

export default rootReducer;