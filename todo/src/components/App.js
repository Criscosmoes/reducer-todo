import React, { useReducer } from "react";
import { initialState, reducer } from "./../reducers";
import {
  addTodo,
  setNewText,
  changeCompleted,
  clearForm,
} from "./../actions/index";

import Form from "./Form";
import TodoList from "./TodoList";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    dispatch(setNewText(e.target.value));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(state.text));
  };

  const onTodoClick = (obj) => {
    dispatch(changeCompleted(obj));

    console.log(state);
  };

  return (
    <div>
      <Form
        onFormSubmit={onFormSubmit}
        handleChanges={handleChanges}
        state={state}
        clearForm={clearForm}
      />
      <TodoList todos={state.todos} onTodoClick={onTodoClick} />
    </div>
  );
};

export default App;
