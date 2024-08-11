import TodoList from "./components/TodoList/TodoList"
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import { useReducer } from "react";
import TodoContext from "./context/TodoContext";
import TodoDispatchContext from "./context/TodoDispatchContext";
import todoReducer from "./reducers/todoReducer";

function App() {

  // const [ list, setList ] = useState([
  //   { id: 1, todoData: 'todo1', finished: false },
  //   { id: 2, todoData: 'todo2', finished: true }
  // ])

  const [list, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <h1 className="heading">Todo App</h1>
        <hr />
        <AddTodo/>
        <TodoList/>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
