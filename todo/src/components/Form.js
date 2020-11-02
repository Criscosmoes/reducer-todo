import React from 'react'; 


const Form = ({onFormSubmit, handleChanges, text}) => {



    return (
        <form onSubmit={onFormSubmit}>
             <input value={text} onChange={handleChanges} type="text" /> 
            <button type="submit">Submit!</button> 
            <button type="submit">Clear Completed!</button>
        </form>
    )
}

export default Form; 