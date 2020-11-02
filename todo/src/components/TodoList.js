import React from 'react'; 



const TodoList = ({todos}) => {

    const list = todos.map((cur, index) => {
        return (
            <div key={index}>{cur}</div>
        )
    })

    return (
        <div>
            {list}
        </div>
    )
}


export default TodoList; 