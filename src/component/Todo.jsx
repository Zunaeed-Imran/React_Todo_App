import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';

const Todo = (props) => {

  const { title, desc, id } = props.todo;

  return (
    <article>
      <div>
        <h4>{id}</h4>
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
      <div>
        <button>
          <RiDeleteBin5Line style={{color:'red'}}/>
        </button>
      </div>
    </article>
  );
}

export default Todo;
