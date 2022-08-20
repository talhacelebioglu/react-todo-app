import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { toast } from "react-toastify";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [...todos, todo];
    setTodos(newTodos);
    toast.success("Todo added!");
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    toast.success("Todo updated!");
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
    toast.error("Todo deleted!");
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        if (todo.isComplete === false) {
          toast.error("Todo not completed!");
        } else {
          toast.success("Todo completed!");
        }
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <TodoForm onSubmit={addTodo} todos={todos} setTodos={setTodos} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <br></br>
      {todos && todos.length ? "" : "Empty..."}
    </div>
  );
};

export default TodoList;
