import React from "react";
import TextInput from "./TextInput/TextInput.jsx"
import FormButtons from "./FormButtons/FormButtons.jsx"

import './EditForm.css';

const EditForm = () => {
  return (
    <div className="edit-form">
      <h1>Create Todo</h1>
      <form>
        <TextInput />
        <FormButtons />
      </form>
    </div>
  );
};

export default EditForm;
