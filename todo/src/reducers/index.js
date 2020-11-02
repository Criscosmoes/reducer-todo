

const reducer = (state, action) => {
    switch(action.type) {
        case("SET_NEW_TEXT"): 
            return({...state, text: action.payload}); 
        case("ADD_TODO"): 
            return({...state, todos: [...state.todos, action.payload]}); 
        case("CLEAR_FORM"): 
            return({...state, text: action.payload})
        default: 
            return(state); 

    }
}


export default reducer; 