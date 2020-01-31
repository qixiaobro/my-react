import React, { Component } from "react";
import store from "../store";
import TodoListUI from "./todoListUI";
import {
  getChangeInputValue,
  getAddTodoList,
  getDeleteTodoItem,
  getTodoList,
} from "../store/actionCreator";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange); //订阅store的变化
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        buttonClick={this.buttonClick}
        list={this.state.list}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }

  componentDidMount() {
    const action=getTodoList()
    store.dispatch(action)
  }

  handleInputChange(e) {
    const action = getChangeInputValue(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  buttonClick() {
    const action = getAddTodoList(this.state.inputValue);
    store.dispatch(action);
  }

  handleDeleteItem(index) {
    const action = getDeleteTodoItem(index);
    store.dispatch(action);
  }
}

export default TodoList;
