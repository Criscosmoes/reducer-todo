import React, { useReducer } from 'react'; 
import nextId from 'react-id-generator'; 
import { initialState, reducer } from './../reducers';
import { addTodo, setNewText } from './../actions/index';

import Form from './Form';
import TodoList from './TodoList';



const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState); 


    const handleChanges = e => {
       dispatch(setNewText(e.target.value)); 

        
    }

    const onFormSubmit = e => {
        e.preventDefault(); 


        dispatch(addTodo(state.text))
    }



    return (
        <div>
            <Form onFormSubmit={onFormSubmit} handleChanges={handleChanges} state={state} /> 
            <TodoList todos={state.todos}/> 
        </div>
    )
}

export default App; 