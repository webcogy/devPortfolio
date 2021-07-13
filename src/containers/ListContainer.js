import React, {useEffect} from 'react';
import List from '../components/List'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/actions'
import listData from "../json/list.json";

function ListContainer() {
    const dispatch = useDispatch();

    const { list } = useSelector(state => state.listStates)

    const onGetListAll = () => dispatch(actions.getListAll(listData));

    
    useEffect(() => {
        onGetListAll();
    }, []);

    return (
        <List 
            listAll={list}
        />
    );
}

export default ListContainer;
