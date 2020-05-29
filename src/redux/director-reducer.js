import React from 'react'

//initial state.
let initialState = {

    todolist: {value:null} ,
    workers: null,
    createWork: {
        tempValues:{
            workerID: null,
            subject: null,
            date: null,
            comment: null
        },
        isSubmited: 0
    }




}
//Load todoList from DB.
export let loadTodo = (todos) => {
    return { type: 'LOAD_TODO', todos }  
}
//Load workers
export let loadWorkers = (workers) => {
    return { type: 'LOAD_WORKERS', workers }  
}
//Set workerID (for who is this new task from todo)
export let setWorkerTodo = (workerID) => {
    return { type: 'WORKER_SET', workerID }  
}
//Set subject(New todo subject)
export let setSubjectTodo = (subject) => {
    return { type: 'SUBJECT_SET', subject }  
}
//Set comment(New todo comment)
export let setCommentTodo = (comment) => {
    return { type: 'TODOCOMMENT_SET', comment }  
}
//Set date(New todo date creation)
export let setDateTodo = (todoDate) => {
    return { type: 'DATETODO_SET', todoDate }  
}
//post new todoWork to DB.
export let createTodo = (isSubmited) => {
    return { type: 'CREATE_TODO', isSubmited }

}
//Body reducer.
const directorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TODO': {
            
            let newState = {...state}
            newState.todolist.value = action.todos

            return newState
        }

        case 'LOAD_WORKERS' : {

            let newState = {...state}
            newState.workers = action.workers

        }

        case 'WORKER_SET': {
            let newState = {...state}
            newState.createWork.tempValues.workerID = action.workerID
            return newState
        }

        case 'SUBJECT_SET': {
            let newState = {...state}
            newState.createWork.tempValues.subject = action.subject
            return newState
        }

        case 'TODOCOMMENT_SET': {
            let newState = {...state}
            newState.createWork.tempValues.comment = action.comment
            return newState
        }

        case 'DATETODO_SET': {
            let newState = {...state}
            newState.createWork = {...state.createWork}
            newState.createWork.tempValues = {...state.createWork.tempValues}
            newState.createWork.tempValues.date = action.todoDate
            
            return newState
        }

        case 'CREATE_TODO': {
            let newState = {...state}
            newState.createWork = {...state.createWork}
            newState.createWork.isSubmited = {...state.createWork.isSubmited}
            newState.createWork.isSubmited = action.isSubmited
            
            return newState
        }

        

        default: {
            
            return { ...state }
        }

    }

}
export default directorReducer;