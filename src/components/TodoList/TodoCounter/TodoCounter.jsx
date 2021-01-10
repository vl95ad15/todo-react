import React from "react";
import './TodoCounter.css';

const TodoCounter = () => {
  return(
    <div className="todo-counter">
      <div className="total-counter-text">Total ToDo Count:</div>
      <div className="total-counter-number"></div>
    </div>
  );
};

export default TodoCounter;
