import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_LIST,
    DELETE_TODO_ITEM,
    INIT_TODO_ITEM
} from './actionTypes'
import axios from "axios";
export const getChangeInputValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoList = (value) => ({
    type: ADD_TODO_LIST,
    value
})

export const getDeleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const getInitTodoList = (value) => ({
    type: INIT_TODO_ITEM,
    value
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get("/list.json").then(res => {
            const data = res.data;
            const action = getInitTodoList(data)
            dispatch(action)
        });
    }
}
