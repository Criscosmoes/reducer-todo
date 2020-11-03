import React from 'react'; 
import styled from 'styled-components'; 



const StyledTodoList = styled.div`


.active {
    background: red; 
}


`

const TodoList = ({todos, onTodoClick}) => {




  

    const renderedList = todos.map(cur => {
        return (
            <div className={cur.completed ? 'active' : ''} onClick={() => onTodoClick(cur)}  key={cur.id}>{cur.task}</div>
        )
    })








    return (
        <StyledTodoList>
            <div>
                {renderedList}
            </div>
        </StyledTodoList>
    )
}


export default TodoList; 