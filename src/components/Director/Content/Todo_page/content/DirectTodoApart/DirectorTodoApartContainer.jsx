import React from 'react'
import * as axios from 'axios'
import DirectorTodoApart from './DirectorTodoApart'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadTodoApart, tempAttach, tempNotes } from '../../../../../../redux/director-reducer'



class DirectorTodoApartContainer extends React.Component{

    state ={
        worker_id: this.props.match.params.workerid
    }

    componentDidMount(){

        const todoid = this.props.match.params.todoid

        axios.get(`https://localhost:3033/todo/${todoid}`).then(res =>{
            this.props.loadTodoApart(res.data)

        })
    }


    uploadFiles(data){
        
        const varia = new FormData()
        varia.append('file', data)
        varia.append('id', data.todo_id)
        varia.append('note', data.note)
        varia.append('worker_id', data.worker_id)

        

        
    
        axios.post(`https://localhost:3033/upload`, varia).then(res =>{
            if(res.statusText === 'OK'){
                console.log(res.status)
                
                // window.location.reload(false)

            }
        })

        


        
    }

    setUpdateTodo(todoid){

        // console.log(todoid)

        let archive = false

        let data = {isArchived: archive, todoid: todoid.todo_id, updated: todoid.worker_id}
        console.log('here')
        console.log(data)

        

        axios.put('https://192.168.10.86:3033/todo/archive', data).then(res => {
            
        console.log(res.status)
        window.location.reload(false)
    })
    }

    setStatusDone(todoid) {

        // console.log(todoid)

        let status = 'done'

        let data = { status: status, todoid: todoid.todo_id, updated: todoid.worker_id }
        console.log('here')
        console.log(data)



        axios.put('https://localhost:3033/todo/updstatus', data).then(res => {

            console.log(res.status)
            window.location.reload(false)
        })
    }

    

    render(){
        return(
            <DirectorTodoApart 
            todo={this.props.todo} 
            tempAttach={this.props.tempAttach} 
            tempNotes={this.props.tempNotes}
            tempNotesP={this.props.tempNotesP} 
            tempAttachP={this.props.attach} 
            actualwkid={this.state.worker_id}
            uploadfiles={this.uploadFiles}
            setUpdateTodo={this.setUpdateTodo}
            setStatusDone={this.setStatusDone}/>
            
        )
    }
}

let mapStateToProps = (state)=>{
    return{

        todo: state.directorPage.todo,
        attach: state.directorPage.todoapart.tempValues.attachments,
        tempNotesP: state.directorPage.todoapart.tempValues.notes,

    }
}

let mapDispatchToProps = (dispatch)=>{
    return{

        loadTodoApart: (todo)=>{
            dispatch(loadTodoApart(todo))
        },
        tempAttach: (attach) =>{
            dispatch(tempAttach(attach));
        },

        tempNotes: (notes) =>{
            dispatch(tempNotes(notes))
        },

    }
}

let contWithRouter = withRouter(DirectorTodoApartContainer);

export default connect(mapStateToProps, mapDispatchToProps)(contWithRouter)