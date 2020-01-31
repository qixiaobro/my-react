import {CHANGE_INPUT_VALUE,ADD_TODO_LIST,DELETE_TODO_ITEM,INIT_TODO_ITEM} from './actionTypes'
const defaultState = {
    inputValue:'',
    list:[]
}
//reducer 可以接受state，但绝不能修改state
export default (state=defaultState,action) =>{
    if(action.type===INIT_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.value;
        return newState
    }
    if(action.type===CHANGE_INPUT_VALUE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState
    }
    if(action.type===ADD_TODO_LIST){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(action.value);
        newState.inputValue='';
        return newState
    }
    if(action.type===DELETE_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);
        newState.inputValue='';
        return newState
    }
    return state;
}