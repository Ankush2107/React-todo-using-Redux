import { combineReducers, createStore } from "redux";

// reducer imports
import todoReducer from "./slices/todoSlices";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({todo: todoReducer});

const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV !== 'production', 
})


export default store; 