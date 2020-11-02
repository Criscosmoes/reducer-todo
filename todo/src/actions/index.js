


export const addTodo = todo => {
    return({
        type: "ADD_TODO", payload: todo, 
    })
}

export const setNewText = text => {

    return({
        type: "SET_NEW_TEXT", 
        payload: text, 
    })
}

export const changeCompleted = obj => {

    return({
        type: "CHANGE_COMPLETED", 
        payload: obj, 
    })
}


export const clearForm = (arr) => {

    return({
        type: "CLEAR_FORM", 
    })
}