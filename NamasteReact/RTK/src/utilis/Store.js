import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Slice.js'
export const store = configureStore({
    reducer:todoReducer
})