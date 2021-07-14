import React, {useEffect, useCallback} from 'react';
import Kind2 from '../components/Kind2';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/actions'


function Kind2Container() {
    const dispatch = useDispatch();
    const { list_kind1, kind2 } = useSelector(state => state.listStates)
    const chk_kinds = [];   // 화면상에서 체크한 kinds를 담을 공간

    // 버튼 클릭 시
    const clickButton = (e) => {
        if( e.target.value == undefined ) return;

        // 클릭한 kind에 대한 index 확인
        const indexof = chk_kinds.indexOf(e.target.value); 

        // kind선택 했고, 배열안에 없다면
        if( e.target.checked === true && indexof === -1 ) { 
            chk_kinds.push(e.target.value); // 추가

        // kind선택 지웠고, 배열안에 있다면
        }else if( e.target.checked === false && indexof !== -1 ){
            chk_kinds.splice( indexof, 1 ); // 제거
        }

        kind2Calculator( chk_kinds );
    }


    // 1) 선택한 스킬에 다 포함되는지 list_kind1 각 배열 모두 체크
    // 2) 중복값 모두 제거
    const kind2Calculator = (chk_kinds) => {
        try{
            console.log("🚀 ~ file: kind2Container.js ~ line 35 ~ kind2Calculator ~ chk_kinds", chk_kinds)
            let kindsResult = []; // action으로 보낼 최종 배열

            for(let k=0; k<list_kind1.length; k++){
                let chk = false;
                for(let i=0; i<chk_kinds.length; i++){ // 스킬 체크
                    if(list_kind1[k].kind2.indexOf(chk_kinds[i]) !== -1){ // 스킬 있으면
                        chk = true;
                    }else{
                        chk = false;
                        break;
                    }
                }
                if( chk === true ) kindsResult.push(list_kind1[k])
            }

            // onGetListKind2(kindsResult);
        }catch(error){
            console.log(error)
        }
    }


    // action에 완성된 list 전송
    const onGetListKind2 = (kind2) => dispatch(actions.getListKind2(kind2))


    return (
        <Kind2
            kind2={kind2}
            clickButton={clickButton}
        />
    );
}

export default Kind2Container;
