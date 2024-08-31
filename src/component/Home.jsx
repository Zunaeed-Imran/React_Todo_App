// this is home page, we call program form here.

import  { useState } from 'react';
import Todos from './Todos';


import New_todo from './New_todo';

import { v4 as uuidv4 } from 'uuid';



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

      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
