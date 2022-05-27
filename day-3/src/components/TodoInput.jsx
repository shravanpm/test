import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [value,setvalue] = useState("")
  return (
    <div>
        <input type="text" 
        value={value}
        placeholder='new todo' 
        onChange={(e) => {
            setvalue(e.target.value);
            
        } }/>
        <button onClick={() => {
            addTodo(value);
            setvalue("");
            }}>Add</button>
    </div>
  )
}

export default TodoInput