import React, { useState } from 'react';
import Todos from './Todos';


import New_todo from './New_todo';

import { v4 as uuidv4 } from 'uuid';
// import { todo } from 'node:test';


const Home = () => {


  const [todos, setTodos] = useState([])

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {

    setTodos((prevTodos) => {
     const filteredTodos = prevTodos.filter(todo => todo.id !== id);


      return filteredTodos;
    })
  }


  return (
    <div>
      <New_todo addTodo={handleAddTodo} />

      <h4 style={{ color: 'green' }}>This is From Home</h4>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
