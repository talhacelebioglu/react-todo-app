import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <h1>Todo App </h1>
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}

export default App;
