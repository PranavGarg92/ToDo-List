import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import Header from "./components/Header";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="constainer">
      <div className="App">
        <div>
          <Header />
          <Todo
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
          <TodoList
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
