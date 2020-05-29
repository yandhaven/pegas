import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import GeneralContent from './general_content'
import {loadTodo} from '../../../../../../redux/director-reducer'

class DirectToDo extends React.Component{
    componentDidMount(){
        
        axios.get('https://localhost:3033/todos').then(response =>{
            this.props.loadTodo(response.data)
           
        })

        

        
    }

    render(){
        
        return <GeneralContent todos={this.props.todos}/>
    }
}

let mapStateToProps =(state)=>{
    return {

        todos: state.directorPage.todolist.value,
        


    }
}

let mapDispatchToProps = (dispatch) =>{
    return {

        loadTodo: (todos)=>{
            dispatch(loadTodo(todos));
        }, 

        

       


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectToDo)