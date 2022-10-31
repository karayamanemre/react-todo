import React from 'react';
import ReactDOM from 'react-dom';
import './functionBased/App.css';
import { BrowserRouter } from 'react-router-dom';
//component file
import TodoContainer from './functionBased/components/ToDoContainer';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
