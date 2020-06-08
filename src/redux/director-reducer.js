import React from 'react'

//initial state.
let initialState = {

    todolist: {value:null} ,
    workers: null,
    todo:null,
    createWork: {
        tempValues:{
            workerID: null,
            subject: null,
            date: null,
            comment: null,
            till_date: null,
            status: 'not read'
            
        },

        isSubmited: 0
    },
    todoapart:{
        tempValues: {
            notes: null,
            attachments:null,
            todoid: null,
            attachmentsApart: null

        }
    }




}
//Load todoList from DB.
export let loadTodo = (todos) => {
    return { type: 'LOAD_TODO', todos }  
}
//Temp attachment file to post it to db
export let tempAttach = (attach) => {
    return { type: 'TEMP_ATTACH', attach }  
}
//Set temp notes to post 
export let tempNotes = (notes) => {
    return { type: 'TEMP_NOTES', notes }  
}
//Load selected todo from db
export let loadTodoApart = (todo) => {
    return { type: 'LOAD_TODOAPART', todo }  
}
//load attachments form db
export let loadAttachApart = (attach) => {
    return { type: 'LOAD_ATTACHAPART', attach }  
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

export let setTillDate = (tilldate) => {
    return { type: 'TILLDATE_SET', tilldate }  
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

        case 'TEMP_NOTES': {
            
            let newState = {...state}
            newState.todoapart.tempValues = {...state.todoapart.tempValues}
            newState.todoapart.tempValues.notes = action.notes

            return newState
        }
//Temp attachment file to post it to db
        case 'TEMP_ATTACH': {
            
            let newState = {...state}
            newState.todoapart.tempValues = {...state.todoapart.tempValues}
            newState.todoapart.tempValues.attachments = action.attach

            return newState
        }

        case 'LOAD_ATTACHAPART': {
            
            let newState = {...state}
            newState.todoapart.tempValues = {...state.todoapart.tempValues}
            newState.todoapart.tempValues.attachmentsApart = action.attach

            return newState
        }

        case 'LOAD_TODOAPART': {
            
            let newState = {...state}
            newState.todo = action.todo

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