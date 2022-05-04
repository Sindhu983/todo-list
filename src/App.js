import React,{useState} from 'react'
import "./App.css"
import {Form} from './Components/Form'
import { Todolist } from './Components/Todolist'

export default function App() {
  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div className='App'>
      <header>
        Todo list
      </header>
        <Form  todos={todos} setTodos={setTodos} setTextInput={setTextInput} textInput={textInput}/>
        <Todolist todos={todos} setTodos={setTodos}/>
        
      

    </div>
  )
}
