import React from 'react';
import List from '../components/List'
import { useSelector, useDispatch } from 'react-redux';
import { getAll } from '../redux/listReducer'
// import { increase, decrease, setDiff } from '../redux/list'

function ListContainer() {

/* 
    const { number, diff } = useSelector(state => ({ //state.getState()가 여기로 온다
        number:state.counter.number,
        diff:state.counter.diff
    }));
 */
    const dbList = useSelector(state => {
        console.log(state)
    })

    // useDispatch => dispatch 사용가능
    const dispatch = useDispatch();

    const onGetAll = () => dispatch(getAll());
    console.log("🚀 ~ file: ListContainer.js ~ line 22 ~ ListContainer ~ onGetAll", onGetAll)
    onGetAll();
    /* 
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onGetAll = list => dispatch(setDiff());
 */
    return (
        <List 
            dbList={dbList}
            /* number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff} */
        />
    );
}

export default ListContainer;
