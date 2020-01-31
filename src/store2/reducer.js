const defaultValues={
    inputValue:'',
    list:[]
}

export default (state=defaultValues,action)=>{
    if(action.type==='input_change'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value;
        return newState
    }
    if(action.type==='click_change'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        newState.inputValue=''
        return newState
    }
    if(action.type==='delete_item'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1);
        return newState
    }

    return state
}