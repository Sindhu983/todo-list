import React from 'react'

const Todofunction = ({text}) => {
  return (
    <div className='todo-input-container'>
        <li className='todo-item'>{text}</li>
        <button className='check-btn'><i class="fa-solid fa-check"></i></button>
        <button className='delete-btn'><i class="fa-solid fa-trash"></i></button>
    </div>
  )
 
}

export {Todofunction}