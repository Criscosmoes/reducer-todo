import React, { useReducer } from 'react'; 
import reducer from './../reducers'; 
import { setNewText, addTodo, clearForm } from './../actions'; 
import Form from './Form'; 
import TodoList from './TodoList';

const App = () => {


    const initialState = {
        text: '', 
        todos: [], 
    }
    
    const [state, dispatch] = useReducer(reducer, initialState); 

    const handleChanges = e => {

        dispatch(setNewText(e.target.value)); 
    }

    const onFormSubmit = e => {
        e.preventDefault(); 

        dispatch(addTodo(state.text))
        console.log(state); 

        dispatch(clearForm('')); 
    }
    

    return (
        <div>
        
            <Form onFormSubmit={onFormSubmit} text={state.text} handleChanges={handleChanges}/> 
            <TodoList todos={state.todos} /> 
        </div>
    )
}


export default App; 