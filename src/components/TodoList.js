import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, setTodos, input, setInput }) => {
  const handleEdit = (todo, id) => {
    setInput(todo.task);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="list">
      {todos.map((todo) => {
        const { id } = todo;
        return (
          <div key={todo.id} className="listItem">
            <div className="todo-task">{todo.task}</div>
            <div>
              <button
                type=""
                onClick={() => setTodos(todos.filter((todo) => todo.id !== id))}
              >
                Done
              </button>
            </div>

            <div>
              <button onClick={() => handleEdit(todo, id)}>Edit</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
