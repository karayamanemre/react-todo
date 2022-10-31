import React, { Component } from 'react';

export default class ToDoItem extends Component {
  render() {
    return <li>{this.props.todo.title}</li>;
  }
}
