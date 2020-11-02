import React from "react";

const Form = ({ handleChanges, onFormSubmit, state, clearForm }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input value={state.text} onChange={handleChanges} type="text" />
      <button type="submit">ADD TODO</button>
      <button onClick={clearForm}>CLEAR FORM</button>
    </form>
  );
};

export default Form;
