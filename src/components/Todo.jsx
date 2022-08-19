import React from "react";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-item complete" : "todo-item"}
      key={index}
    >
      <p key={todo.id}>{todo.text}</p>
      <div className="icons">
        <AiIcons.AiOutlineEdit
          className="edit-icon"
          title="Edit"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
        <AiIcons.AiOutlineCheckCircle
          className="completed-icon"
          title="Completed"
          onClick={() => completeTodo(todo.id)}
        />
        <AiIcons.AiOutlineCloseCircle
          className="delete-icon"
          title="Delete"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  ));
};

export default Todo;
