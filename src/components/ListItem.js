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
        <h4>
          {todo.title}
          <span onClick={() => this.handleComplete(todoId)}>
            <i>Done</i>
          </span>
        </h4>
      </div>
    );
  }
}

export default connect(null, {completeToDo})(ListItem);
