// root reducer.   counter 와 todos를 여기서 합친다
import { combineReducers } from 'redux';
import listReducer from './listReducer';

const rootReducer = combineReducers({
    listReducer,
    // counter,
})

export default rootReducer;