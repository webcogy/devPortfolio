import React, {useEffect, useCallback} from 'react';
import List from '../components/List'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/actions'
import listData from "../json/list.json";


function ListContainer() {
    const dispatch = useDispatch();

    const { list_kind2, listCounting, isShowBtnMore } = useSelector(state => state.listStates)

    const onGetListAll = () => dispatch(actions.getListAll(listData))
    const onGetListKind1 = (kind) => dispatch(actions.getListKind1(kind))
    const onGetListKind2 = () => dispatch(actions.getListKind2(listData))
    const onSetIsShowBtnMore = (trueFalse) => dispatch(actions.setIsShowBtnMore(trueFalse))
    const onSetListCounting = (count) => dispatch(actions.setListCounting(count))


    // 최초 실행 시 list 박스 3개 배열에 모두 담기
    useEffect(() => {
        onGetListAll();
        onGetListKind1('ALL');
        onGetListKind2();
    }, []);

/*
    useEffect(() => {
        console.log("🚀 ~ file: ListContainer.js ~ line 37 ~ ListContainer ~ list", list)
        console.log("🚀 ~ file: ListContainer.js ~ line 38 ~ ListContainer ~ list_kind1", list_kind1)
        console.log("🚀 ~ file: ListContainer.js ~ line 39 ~ ListContainer ~ list_kind2", list_kind2)
    }, [list, list_kind1, list_kind2 ]);
*/

    const clickMore = () => {
        const addCount = listCounting + 5;
        onSetListCounting(addCount);
    }

    // more 버튼 show / hide
    useEffect(() => {
        if( list_kind2.length < listCounting ){
            onSetIsShowBtnMore(false)
        }else{
            onSetIsShowBtnMore(true)
        }
    }, [list_kind2, listCounting]);



    return (
        <>
            <List
                list={list_kind2.slice(0, listCounting)}
            />

            {
                isShowBtnMore === true &&
                <button 
                    className="btn_more" 
                    onClick={clickMore}>
                    MORE
                </button>
            }
            
        </>
    );
}

export default ListContainer;
