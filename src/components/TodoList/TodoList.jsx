import React from "react";
import ToDoCounter from "./TodoCounter/TodoCounter.jsx"
import Statistics from "./Statistics/Statistics.jsx"
import TodoSection from "./TodoSection/TodoSection.jsx"

import './TodoList.css'

const TodoList = () => {
  return (
    <div className="todo-list-container">
      <h1>My ToDos</h1>
      <h2>
        <ToDoCounter />
      </h2>
      <Statistics />
      <TodoSection />
    </div>
  );
};

export default TodoList;