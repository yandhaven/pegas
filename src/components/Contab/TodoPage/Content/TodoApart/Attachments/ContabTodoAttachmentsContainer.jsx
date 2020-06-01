import React from 'react'
import * as axios from 'axios'
import ContabTodoAttachments from './ContabTodoAttachments'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadAttachApart } from '../../../../../../redux/contab-reducer'


class ContabTodoAttachmentsContainer extends React.Component{

    componentDidMount(){
        console.log(this.props.match.params.todoid)
        let todoid = this.props.match.params.todoid
        axios.get(`https://localhost:3033/attach/${todoid}`).then(res =>{
            this.props.loadAttachApart(res.data)
            console.log(res.data)
        })
    }

    render(){
        return(
            <ContabTodoAttachments attachmentsApart={this.props.attachmentsApart}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return{

        attachmentsApart: state.contabPage.todo.tempValues.attachmentsApart

    }
}

let mapDispatchToProps = (dispatch) =>{
    return{

        loadAttachApart: (attach) =>{
            dispatch(loadAttachApart(attach))
        }

    }
}
let renderWithRouter = withRouter(ContabTodoAttachmentsContainer)
export default connect(mapStateToProps, mapDispatchToProps)(renderWithRouter)