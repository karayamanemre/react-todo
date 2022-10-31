import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

export default class ToDosList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}
