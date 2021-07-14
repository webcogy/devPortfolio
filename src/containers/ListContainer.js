import React, {useEffect, useCallback} from 'react';
import List from '../components/List'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/actions'
import listData from "../json/list.json";

function ListContainer() {
    const dispatch = useDispatch();

    const { list_kind1, list_kind2 } = useSelector(state => state.listStates)

    const onGetListAll = () => dispatch(actions.getListAll(listData))
    const onGetListKind1 = (kind1) => dispatch(actions.getListKind1(kind1))

    useEffect(() => {
        onGetListAll();
        onGetListKind1('ALL');
    }, []);

/*
    useEffect(() => {
        console.log("🚀 ~ file: ListContainer.js ~ line 37 ~ ListContainer ~ list", list)
        console.log("🚀 ~ file: ListContainer.js ~ line 38 ~ ListContainer ~ list_kind1", list_kind1)
        console.log("🚀 ~ file: ListContainer.js ~ line 39 ~ ListContainer ~ list_kind2", list_kind2)
    }, [list, list_kind1, list_kind2 ]);
*/

    return (
        <List
            list={ !list_kind2 ? list_kind1 : list_kind2 }
        />
    );
}

export default ListContainer;
