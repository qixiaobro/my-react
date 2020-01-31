import React, { Component, Fragment } from "react";
import TodoItem from "./todoItem";
import axios from "axios";
import "./todoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //组件状态
      inputValue: "",
      list: []
    };
    this.ulRef = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/** sss*/}
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={input => {
              this.input = input;
            }}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul ref={this.ulRef}>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }

  componentDidMount() {
    axios
      .get("/api/todolist")
      .then(() => {})
      .catch(() => {});
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <Fragment key={index}>
          <TodoItem
            content={item}
            index={index}
            handleItemDelete={this.handleItemDelete}
          ></TodoItem>
          {/*<li
            key={index}
            onClick={this.handleItemDelete.bind(this, index)}
            dangerouslySetInnerHTML={{ __html: item }}
          ></li>*/}
        </Fragment>
      );
    });
  }

  handleInputChange() {
    // this.setState({  //旧语法
    //   inputValue: e.target.value
    // });

    // const value = e.target.value;
    const value = this.input.value;
    this.setState(() => ({ inputValue: value })); //异步返回一个对象
  }

  handleButtonClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });

    this.setState(
      prevState => ({
        //prevState 改变之前的state
        //   list: [...this.state.list, this.state.inputValue],
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
      }),
      () => {
        console.log(this.ulRef);
      }
    );
  }

  handleItemDelete(index) {
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // });

    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;
