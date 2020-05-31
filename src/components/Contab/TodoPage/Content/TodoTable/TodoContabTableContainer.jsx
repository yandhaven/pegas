import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import TodoContabTable from './TodoContabTable'
import { loadTodo } from '../../../../../redux/contab-reducer'
import { withRouter } from 'react-router-dom'

class TodoContabTableContainer extends React.Component {

    componentDidMount(){

        console.log(this.props)
        const worker_id = this.props.match.params.workerid

        axios.get(`https://localhost:3033/todos/${worker_id}`).then(res => this.props.loadTodo(res.data),()=>{console.log(this.props)})
        
    }

    

    render(){
        return(
            <TodoContabTable todos={this.props.todos}/>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        todos: state.contabPage.todolist

    }
}

const mapDispatchToProps =(dispatch)=>{
    return {

        loadTodo: (todos)=>{
            dispatch(loadTodo(todos))
        }

    }
}

let TableWithRouter = withRouter(TodoContabTableContainer)

export default connect(mapStateToProps, mapDispatchToProps)(TableWithRouter)