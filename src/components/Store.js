import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from './CounterSlice';
import { todoReducer } from "./CounterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
})