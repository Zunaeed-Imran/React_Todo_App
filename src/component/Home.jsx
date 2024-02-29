import React, { useState } from 'react';
import Todos from './Todos';

import style from './home.module.css';
import New_todo from './New_todo';

import { u4 as uuidv4 } from "uuid";



const Home = () => {


  const [todos, setTodos] = useState([])

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    })
  }

  return (
    <div className={style.container}>
      <New_todo addTodo={handleAddTodo} />

      <h4 style={{ color: 'green' }}>This is From Home</h4>
      <Todos todos={todos} />
    </div>
  );
};

export default Home;