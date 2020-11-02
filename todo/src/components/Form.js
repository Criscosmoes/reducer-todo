import React from "react";

const Form = ({ handleChanges, onFormSubmit, state, onClearForm }) => {
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input value={state.text} onChange={handleChanges} type="text" />
        <button type="submit">ADD TODO</button>
      </form>
      <button onClick={onClearForm}>CLEAR COMPLETED!</button>
    </div>
  );
};

export default Form;
