import TodoList from "./components/TodoList/TodoList"
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
function App() {
  return (
    <div>
      <h1 className="heading">Todo App</h1>
      <hr />
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default App
