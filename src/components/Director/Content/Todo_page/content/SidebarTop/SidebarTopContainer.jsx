import React, { Suspense } from 'react'
import { unstable_createResource } from 'react-cache'
import { connect } from 'react-redux'
import * as axios from 'axios'
import SideBarTopContent from './sidebar_top_content'
import { withRouter } from 'react-router-dom'
import { setWorkerTodo, setSubjectTodo, loadTodo, setCommentTodo, setDateTodo, createTodo, loadWorkers } from '../../../../../../redux/director-reducer'



const TodoCreate =(props)=>{

    


   const onSubmithandle = ()=>{


        let dataToPost = props.newtodo

        axios.post('https://localhost:3033/todos/new', dataToPost).then(res => {
            console.log(res.data);

        })

    }

    
        return(
            <div>
                <SideBarTopContent  newtodo={props.newtodo}  createTodo={props.createTodo} onSubmitTodo={onSubmithandle} setComment={props.setComment} setSubject={props.setSubject} setWorkerID={props.setWorkerID} setDate={props.setDate} />
            </div>
        )
    



}

let mapStateToProps = (state) => {
    return {

        newtodo: state.directorPage.createWork.tempValues,
        isSubmited: state.directorPage.createWork.isSubmited,
        workers: state.directorPage.workers,
        

    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        setWorkerID: (workerID) => {
            dispatch(setWorkerTodo(workerID));
        },

        setSubject: (subject) => {
            dispatch(setSubjectTodo(subject));
        },

        setComment: (comment) => {
            dispatch(setCommentTodo(comment));
        },

        setDate: (todoDate) => {
            dispatch(setDateTodo(todoDate))
        },

        createTodo: (isSubmited) => {
            dispatch(createTodo(isSubmited))
        },
        loadWorkers: (workers) => {
            dispatch(loadWorkers(workers))
        },
        loadTodo: (todos)=>{
            dispatch(loadTodo(todos));
        }



    }
}

let ContentWithRouter = withRouter(TodoCreate);

export default connect(mapStateToProps, mapDispatchToProps)(ContentWithRouter);