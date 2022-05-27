import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setnewTodo] = useState("");
    const [page, setpage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [limit, setLimit] = useState(3)
    useEffect(() => {
        const getData = async () => {
            const r = await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`);
            setTotalCount(Number(r.headers["x-total-count"]))
            setTodos(r.data);
        }
        
        getData();
       
    }, [page,limit]);
    const saveInfo = () => {
        console.log(newTodo)
        fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "text": newTodo,
                "done": false
            }),
        }).then((res) => res.json())
            .then((data) => {
                setTodos([...todos, data]);
                setnewTodo("");
            })
    }
    return (
        <div>
            <h1>Todo List</h1>
            <div>


                <input value={newTodo}
                    onChange={({ target }) => setnewTodo(target.value)} />
                <button onClick={() => { saveInfo() }}>Add</button>
            </div>
            <div>
                {todos.map((todo) => (

                    <div key={todo.id}>{todo.text}</div>
                ))}
            </div>
            
            <button disabled={page <= 1}
                onClick={()=>setpage(page-1)}
            >Prev</button>
            
            <select name="" id="" onChange={(e) => setLimit(Number(e.target.value))}>
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
            </select>
            <button
                disabled = {totalCount<page*limit}
                onClick={() => setpage(page + 1)}>Next</button>

        </div>
    )
}

export default Todos