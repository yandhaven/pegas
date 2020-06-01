import React from 'react'

//initial state.
let initialState = {

    todolist: null ,
    todo: {
        values: null,
        tempValues: {
            notes: null,
            attachments:null,
            todoid: null,
            attachmentsApart: null
        },
    }
    
    
}
//Load todoList from DB.
export let loadTodo = (todos) => {
    return { type: 'LOAD_TODO', todos }  
}
//Load todoapart from DB.
export let loadTodoApart = (todo) => {
    return { type: 'LOAD_TODOAPART', todo }  
}

export let tempAttach = (attach) => {
    return { type: 'TEMP_ATTACH', attach }  
}

export let tempNotes = (notes) => {
    return { type: 'TEMP_NOTES', notes }  
}

export let tempTodoid = (todoid) => {
    return { type: 'TEMP_TODOID', todoid }  
}

export let loadAttachApart = (attach) => {
    return { type: 'LOAD_ATTACHAPART', attach }  
}


//Body reducer.
const contabReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TODO': {
            
            let newState = {...state}
            newState.todolist = action.todos

            return newState
        }

        case 'LOAD_TODOAPART': {
            
            let newState = {...state}
            newState.todo.values = action.todo

            return newState
        }

        case 'TEMP_NOTES': {
            
            let newState = {...state}
            newState.todo.tempValues = {...state.todo.tempValues}
            newState.todo.tempValues.notes = action.notes

            return newState
        }

        case 'TEMP_ATTACH': {
            
            let newState = {...state}
            newState.todo = {...state.todo}
            newState.todo.attachments = action.attach

            return newState
        }

        case 'TEMP_TODOID': {
            
            let newState = {...state}
            newState.todo.tempValues = {...state.todo.tempValues}
            newState.todo.tempValues.todoid = action.todoid

            return newState
        }

        case 'LOAD_ATTACHAPART': {
            
            let newState = {...state}
            newState.todo.tempValues = {...state.todo.tempValues}
            newState.todo.tempValues.attachmentsApart = action.attach

            return newState
        }

        default: {
            
            return { ...state }
        }

    }

}
export default contabReducer;