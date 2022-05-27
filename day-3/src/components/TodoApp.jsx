import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const TodoApp = () => {
    const [todos,setTodos] = useState([]);
    const addTodo = (newTodo) => {
        setTodos([...todos,newTodo])
       
    }
  return (
    <div>
        TodoApp
        <TodoInput addTodo={addTodo}/>
         <TodoList todos={todos}/>
    </div>
  )
}

export default TodoApp