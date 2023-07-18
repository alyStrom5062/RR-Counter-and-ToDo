import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, clearTodoList, decrement, increment, incrementByAmount } from './CounterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

const byAmountSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(Number(input)));
};

const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
        dispatch(addTodo({ value: input }));
        setInput("");
    }
};

const handleClearTodos = () => {
    dispatch(clearTodoList());
  };

    return (
        <div className='App'>
            <div className='counter'>

                <h1>{count}</h1>

                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}>
                    Increment
                </button>

                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}>
                    Decrement
                </button>

                <form onSubmit={(e) => byAmountSubmit(e)}>
                    <input type="number" onChange={(e) => setInput(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>

            </div>

            <div className="todo">
                <form onSubmit={(e) => handleTodoSubmit(e)}>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.value}</li>
                ))}
            </ul>

            <button onClick={handleClearTodos}>Clear Todos</button>

        </div>
    )
}