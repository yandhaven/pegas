import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import GeneralContent from './general_content'
import {loadTodo} from '../../../../../../redux/director-reducer'
import { withRouter } from 'react-router-dom'

class DirectToDo extends React.Component{

    state = {
        actualwkID: this.props.match.params.workerid
    }
    
    
    componentDidMount(){
        
        axios.get('https://localhost:3033/todos').then(response =>{
            this.props.loadTodo(response.data)
           
        })

        

        
    }

    setArchive(todoid){

        // console.log(todoid)

        let archive = true

        let data = {isArchived: archive, todoid: todoid.e, updated: todoid.actualwkID}
        console.log(data)

        

        axios.put('https://localhost:3033/todo/archive', data).then(res => console.log(res.status))
    }

    isRemind(data){

        axios.post('https://localhost:3033/todo/remind', data).then(res => console.log(res.status))
    }

    render(){
        
        
        return <GeneralContent todos={this.props.todos}
         setArchive={this.setArchive}
          actualwkID={this.state.actualwkID}
          isRemind={this.isRemind}
          
          />
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

const contWithRouter = withRouter(DirectToDo)

export default connect(mapStateToProps, mapDispatchToProps)(contWithRouter)