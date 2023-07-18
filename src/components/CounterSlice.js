import { createSlice } from '@reduxjs/toolkit';

const counterInitialState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment: (state) => {
            return { value: state.value + 1 }},
        decrement: (state) => {
            return { value: state.value - 1 }},
        incrementByAmount: (state, action) => {
            return { value: state.value + action.payload }
        }
    }
});

const todoInitialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: todoInitialState,
    reducers: {
        addTodo: (state, action) => {
            const { value } = action.payload;
            const newTodo = { id: Date.now(), value, completed: false};
            state.todos.push(newTodo);
        },
        clearTodoList: (state) => {
            state.todos = []
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { addTodo, clearTodoList } = todoSlice.actions

export const counterReducer = counterSlice.reducer;
export const todoReducer = todoSlice.reducer;