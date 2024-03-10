// this page is for show in the display.

import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';

const Todo = (props) => {

  const { title, desc } = props.todo;
  
  // we have to take another const for id.
  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveTodo(id);
 }


  return (
    <article>
      <div>
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
      <div>
        <button onClick={() => {
          handleClick(id);
        }}>
          <RiDeleteBin5Line style={{color:'red'}}/>
        </button>
      </div>
    </article>
  );
}

export default Todo;
