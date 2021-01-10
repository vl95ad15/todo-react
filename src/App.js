import React from "react";
import EditForm from "./components/EditForm/EditForm.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <EditForm />
      <TodoList />
    </div>
  );
}

export default App;
