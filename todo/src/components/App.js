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


    if(state.text.length === 0){
        return; 
    }



    dispatch(addTodo(state.text));
    dispatch(setNewText(''))
  };

  const onTodoClick = (obj) => {
    dispatch(changeCompleted(obj));
  };

  const onClearForm = () => {
    dispatch(clearForm(state.todos))
  }
  return (
    <div>
      <Form
        onFormSubmit={onFormSubmit}
        handleChanges={handleChanges}
        state={state}
        onClearForm={onClearForm}
      />
      <TodoList todos={state.todos} onTodoClick={onTodoClick} />
    </div>
  );
};

export default App;
