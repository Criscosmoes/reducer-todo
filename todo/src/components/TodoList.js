import React from 'react'; 

const TodoList = ({todos, onTodoClick}) => {


  

    const renderedList = todos.map(cur => {
        return (
            <div onClick={() => onTodoClick(cur)}  key={cur.id}>{cur.task}</div>
        )
    })








    return (
        <div>
            {renderedList}
        </div>
    )
}


export default TodoList; 