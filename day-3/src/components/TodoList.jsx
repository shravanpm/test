import React from 'react'

const TodoList = ({todos,children}) => {
  return (
    <div>TodoList
        <div>
        <ul >
            {todos.map((todo) => (
                
                    <li key={todo}>{todo}</li>
                
            ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoList