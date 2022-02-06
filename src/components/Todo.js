import React from "react";
import "./Todo.css";

const Todo = ({ todos, setTodos, input, setInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setTodos([
        ...todos,
        {
          id: new Date().getTime().toString(),
          task: input,
          complete: false,
        },
      ]);
      setInput("");
    }
  };

  return (
    <>
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Add Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn-todo" type="submit">
          Add Task
        </button>
        <button className="btn-todo" onClick={() => setTodos([])}>
          Clear All
        </button>
      </form>
    </>
  );
};

export default Todo;
