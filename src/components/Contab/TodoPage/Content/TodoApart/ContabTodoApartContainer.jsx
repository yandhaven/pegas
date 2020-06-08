import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ContabTodoApart from './ContabTodoApart'
import { loadTodoApart, tempAttach, tempNotes, tempTodoid } from '../../../../../redux/contab-reducer'

class ContabTodoApartContainer extends React.Component {

    state = {
        worker_id: this.props.match.params.workerid
    }

    componentDidMount() {
        const todoid = this.props.match.params.todoid


        axios.get(`https://localhost:3033/todo/${todoid}`).then(res => this.props.loadTodoApart(res.data))

    }

    uploadFiles(data) {

        const varia = new FormData()
        varia.append('file', data)
        varia.append('id', data.todo_id)
        varia.append('note', data.note)
        varia.append('worker_id', data.worker_id)



        axios.post(`https://localhost:3033/upload`, varia).then(res => {
            if (res.statusText === 'OK') {
                console.log(res.status)
                window.location.reload(false)

            }
        })
    }


    setUpdateTodo(todoid) {

        // console.log(todoid)

        let status = 'pending'

        let data = { status: status, todoid: todoid.todo_id, updated: todoid.worker_id }
        console.log('here')
        console.log(data)



        axios.put('https://localhost:3033/todo/updstatus', data).then(res => {

            console.log(res.status)
            window.location.reload(false)
        })
    }

    

    render() {
        return (
            <ContabTodoApart
                todo={this.props.todo}
                tempTodoid={this.props.tempTodoid}
                uploadfiles={this.uploadFiles}
                tempNotesP={this.props.tempNotesP}
                tempAttachP={this.props.attach}
                tempNotes={this.props.tempNotes}
                actualwkid={this.state.worker_id} //worker id from actual session
                tempAttach={this.props.tempAttach}
                setUpdateTodo={this.setUpdateTodo} />
        )
    }
}

const mapStateToProps = (state) => {
    return {

        todo: state.contabPage.todo.values,
        attach: state.contabPage.todo.tempValues.attachments,
        tempNotesP: state.contabPage.todo.tempValues.notes,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        loadTodoApart: (todo) => {
            dispatch(loadTodoApart(todo))
        },

        tempAttach: (attach) => {
            dispatch(tempAttach(attach));
        },

        tempNotes: (notes) => {
            dispatch(tempNotes(notes))
        },


    }
}

let ContabTodoApartWr = withRouter(ContabTodoApartContainer)
export default connect(mapStateToProps, mapDispatchToProps)(ContabTodoApartWr);