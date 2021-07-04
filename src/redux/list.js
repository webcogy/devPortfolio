import axios from 'axios';

const GET_ALL = 'list/GET_ALL'; // 앞에 list를 붙인 이유 : 이름 중복 방지용
/* const INCREASE = 'list/INCREASE'; 
const DECREASE = 'list/DECREASE';  */

export function getAll(){ 
    const req = axios.get('customer')
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })

    return { type:GET_ALL, list:req }
}

/* 
export const increase = () => ({ type:INCREASE })
export const decrease = () => ({ type:DECREASE })
 */
const initialState = {
    list:[
        /*
            idx:0,
            title:'',
            detail:'',
            name:'',
            url:'',
            kind1:'',
            kind2:[],
        */
    ]
    
}

export default function list(state = initialState, action){
    switch(action.type){
        case GET_ALL:
            return{
                ...state,
                list:action.list
            }
        default:
            return state;    
    }
}