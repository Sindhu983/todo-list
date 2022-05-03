import React,{useState} from 'react'
import "./App.css"
import {Todo} from './Components/Todo'
import { Todolist } from './Components/Todolist'
import { Todofunction } from './Components/Todofunction'

export default function App() {
  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div className='App'>
      <header>
        Todo list
      </header>
      <Todo  todos={todos} setTodos={setTodos} setTextInput={setTextInput} textInput={textInput}/>
      <Todolist todos={todos}/>
      <Todofunction />

    </div>
  )
}
