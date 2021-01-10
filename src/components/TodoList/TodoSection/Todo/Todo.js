import React from "react";

import './Todo.css';

const Item = () => {
  return (
    <div className="item">
      <h3>Todo Text</h3>
      <div className="info-block">
        <p className="status-panel"></p>
        <p className="created-date-panel">Created:</p>
      </div>
      <div className="control-block">
        <button className="view-button" value="View"></button>
        <button className="postpone-button" value="Postpone"></button>
        <button className="done-button" value="Done"></button>
        <button className="delete-button" value="Delete"></button>
      </div>
    </div>
  );
};

export default Item;