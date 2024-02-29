import React from 'react';
import Todo from './Todo';

const Todos = props => {
  return (
    <section>
      {props.todos.map(todo => (
        <Todo todo={todo.todo} key={todo.id} id={todo.id} />
      ))}
    </section>
  );
};

export default Todos;
