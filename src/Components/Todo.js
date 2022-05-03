import React from 'react';

const Todo = ({textInput,setTextInput, todos, setTodos}) => {

    const InputTextHandler=(e)=>{
        setTextInput(e.target.value)
        // console.log(e.target.value);
        
    }
    const clickHandler=(e)=>{
        // e.preventDefault();
        setTodos([...todos,{text:textInput, completed:false, id:Math.random()*100}])
        setTextInput("")
    }
    console.log(todos)
  return (
    <div className='todo-container'>
        <input value={textInput} onChange={InputTextHandler} type="text" className="todo-input-box" />
        <button type="submit" onClick={clickHandler} className="add-todo-btn"><i class="fa-solid fa-plus"></i></button>
    </div>
  )
}

export {Todo};