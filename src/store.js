import { combineReducers, createStore } from "redux";

// reducer imports
import todoReducer from "./reducers/todoReducer";

const reducers = combineReducers({todo: todoReducer});

const store = createStore(reducers);

export default store;