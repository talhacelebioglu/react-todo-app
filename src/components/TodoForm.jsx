import React from "react";
import { useState } from "react";

const TodoForm = ({ onSubmit, todo, todos, setTodos, edit }) => {
  const [input, setInput] = useState(edit ? edit.value : "");

  const cancelUpdate = () => {
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  // if (input === "") {
  //   toast.error("Please enter a todo!");
  // } else if (todos.includes(input)) {
  //   toast.error("Todo already exists!");
  // } else if (input.length < 5) {
  //   toast.error("Todo must be at least 5 characters long!");
  // } else {

  // }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            type="text"
            placeholder="Update your todo"
            value={input}
            onChange={handleChange}
            autoFocus
          />
          <button type="submit" className="btn-update">
            Update
          </button>
          <button onClick={cancelUpdate} className="btn-cancel">
            Cancel
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your todo"
            value={input}
            onChange={handleChange}
            autoFocus
          />
          <button type="submit" className="btn-add">
            Add
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
