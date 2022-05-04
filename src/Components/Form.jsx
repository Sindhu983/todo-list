import React from 'react';

const Form = ({textInput,setTextInput, todos, setTodos}) => {

  const InputTextHandler=(e)=>{
        setTextInput(e.target.value)    
    }
    const clickHandler=(e)=>{
        e.preventDefault();
        setTodos([...todos,{text:textInput, completed:false, id:Math.random()*100}])
        setTextInput("")
    }
    console.log(todos)
  return (
    <form>
    
        <input value={textInput} onChange={InputTextHandler} type="text" className="todo-input" />
        <button type="submit" onClick={clickHandler} className="todo-button"><i className="fa-solid fa-plus"></i></button>
    </form>
   
  )
}

export {Form};