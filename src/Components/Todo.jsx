import React from 'react'

const Todo = ({text,todo,todos, setTodos}) => {

  const deleteHandler=()=>{
    setTodos(todos.filter((item)=>item.id !== todo.id))
  };

  const checkHandler=()=>{
    setTodos(todos.map((item)=>{
      if(item.id===todo.id){
        return {...item, completed:!item.completed}
      }
      return item;
    })
    )
  }
  return (
    <div className='todo'>

        <li className={`todo.item ${todo.completed ? "completed" : ""}  `}>{text}</li>
        <button onClick={checkHandler} className='checked-btn'>
          <i className="fa-solid fa-check"></i>
        </button>
        <button onClick={deleteHandler} className='delete-btn'>
          <i className="fa-solid fa-trash"></i>
        </button>
    </div>
  )
 
}

export {Todo}