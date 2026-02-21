import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Todo App</h1>
      </header>

      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
