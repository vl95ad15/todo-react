import "./FormButtons.css";

const FormButtons = () => {
  return (
    <div className="form-row-right">
      <input className="add-todo-button" type="button" value="Add"></input>
      <input className="clear-form-button" type="button" value="Clear"></input>
    </div>
  );
};

export default FormButtons;
