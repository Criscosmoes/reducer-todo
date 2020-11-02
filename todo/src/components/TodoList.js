import React from 'react'; 


const TodoList = ({todos}) => {

    const renderedList = todos.map(cur => {
        return (
            <div key={cur.id}>{cur.task}</div>
        )
    })








    return (
        <div>
            {renderedList}
        </div>
    )
}


export default TodoList; 