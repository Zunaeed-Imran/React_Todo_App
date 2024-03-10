// this page is for add new todo.

import React, { useState } from 'react';




const New_todo = (props) => {

  const [todo, setTodo] = useState({title:'', desc:''})

  // destructuring
  const { title, desc } = todo;



  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return {...oldTodo, [name]:event.target.value}
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo(todo);
    
    // this will empty the title and description when click add button.
    setTodo({ title: "", desc: "" });
}

  



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">TitleL: </label>
        <input type="text" name="title" id="title" value={title} onChange={handleChange}/>
      </div>
      <br />
      <div>
        <label htmlFor="">Description: </label>
        <textarea type="text" name="desc" id="desc" value={desc} onChange={handleChange}/>
      </div>
      <div>
        <button style={{ background: 'blue' }}>Add</button>
      </div>
    </form>
  );
};

export default New_todo;
