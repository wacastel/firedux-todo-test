import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeToDo} from '../actions';
import './style.css';

class ListItem extends Component {
  handleComplete = completeTodoId => {
    const {completeToDo} = this.props;
    completeToDo(completeTodoId);
  };

  render() {
    const{todoId, todo} = this.props;
    return (
      <div key="toDoName" className="todo-list-item">
        <div key="toDoTitle" className="todo-list-title">
          {todo.title}
        </div>
        <div key="todoButton" className="todo-list-button">
          <span onClick={() => this.handleComplete(todoId)}>
            <i>Done</i>
          </span>
        </div>
      </div>
    );
  }
}

export default connect(null, {completeToDo})(ListItem);
