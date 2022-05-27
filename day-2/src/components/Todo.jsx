import { useState } from "react"

export const Todos = () => {

    const [value,setValue] = useState("");
    const [todos,setTodos] = useState([]);

    return (
        <div>
            <h2>Todos</h2>
            <input type="text" 
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                value = e.target.value;
            }}/>
            <button onClick={(e) => {
                setTodos([...todos,{value:value}]);
                setValue("");
            }}>Add</button>

            {todos.map((todo) => (
                <div>
                    {todo.value}
                </div>
            ))}
        </div>
    )
}