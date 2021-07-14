import React, {useEffect, useCallback, useRef} from 'react';
import Kind1 from '../components/Kind1';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/actions'


function Kind1Container() {
    const dispatch = useDispatch();
    const { kind1 } = useSelector(state => state.listStates)

    const onGetListKind1 = (kind1) => dispatch(actions.getListKind1(kind1))
    const clickButton = (e) => {
        const this_value = String(e.target.attributes.kind.nodeValue); // kind attr 뽑아냄
        onGetListKind1(this_value);

        e.target.parentNode.childNodes.forEach(e => e.classList.remove('on')) // on 제거
        e.target.classList.add('on') // on 추가
    }


    return (
        <Kind1
            kind1={kind1}
            clickButton={clickButton}
        />
    );
}

export default Kind1Container;
