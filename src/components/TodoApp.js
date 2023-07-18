import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./CounterSlice";

export default function TodoApp() {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(input.trim() !== "") {
            dispatch(addTodo({value: input}));
            setInput("");
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit"></button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.value}</li>
                ))}
            </ul>
        </div>
    );
}