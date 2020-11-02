import nextId from 'react-id-generator';

export const reducer = (state, action) => {

    switch(action.type){
        case("ADD_TODO"):
            return({...state, todos: [...state.todos, {
                task: action.payload, 
                completed: false, 
                id: nextId(), 
            }]})
        case("SET_NEW_TEXT"): 
            return({...state, text: action.payload})
        case("CHANGE_COMPLETED"): 

            const newList = state.todos.map(cur => {
                if(cur === action.payload){
                    return({
                        ...action.payload, 
                        completed: !action.payload.completed, 
                    })
                }
            })

            return({...state, todos:[...newList]})
        case("CLEAR_FORM"): 
            return({...state, todos: []})
        default: 
            return(state); 
    }
}


export const initialState = {
    todos: [], 
    text: '', 
}