export const setNewText = text => {
    return ({
        type: "SET_NEW_TEXT", 
        payload: text, 
    })
}

export const addTodo = todo => {
    return ({
        type: "ADD_TODO", 
        payload: todo, 
    })
}


export const clearForm = initialText => {

    return({
        type: "CLEAR_FORM", 
        payload: initialText, 
    })
}