import React from 'react'
import { Todo } from './Todo'

const Todolist = ({todos, setTodos}) => {
  // console.log(todos)
  return (
    <div className="todolist-conatainer">
        <ul className="todo-lists">
        {todos.map((todo)=>(
  
            <Todo text={todo.text} setTodos={setTodos} todos={todos} key={todo.id} />
        ))}
        </ul>
    </div>
  )
}

export {Todolist}