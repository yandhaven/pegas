import React from 'react'

//initial state.
let initialState = {

    todolist: null ,
    
    
}
//Load todoList from DB.
export let loadTodo = (todos) => {
    return { type: 'LOAD_TODO', todos }  
}


//Body reducer.
const contabReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TODO': {
            
            let newState = {...state}
            newState.todolist = action.todos

            return newState
        }

        default: {
            
            return { ...state }
        }

    }

}
export default contabReducer;