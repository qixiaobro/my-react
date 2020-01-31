import React, { Component } from "react";
import PropTypes from 'prop-types';
import TodoList from "./todoList";

class todoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    const { text,content } = this.props;
    return (
    <li 
        onClick={this.handleDelete}> 
        {text}-{content}  
    </li>
    );
  }

  handleDelete() {
    const {handleItemDelete,index} = this.props;
    handleItemDelete(index);
  }
}

todoItem.propTypes={
  text:PropTypes.string.isRequired,
  content:PropTypes.string,
  handleItemDelete:PropTypes.func,
  index:PropTypes.number
}

todoItem.defaultProps={
  text:'hello world'
}
export default todoItem;
