import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DirectorTodoAttachments from './DirectorTodoAttachments'
import { loadAttachApart } from '../../../../../../../redux/director-reducer'

class DirectorTodoAttachmentsContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params.todoid)
        let todoid = this.props.match.params.todoid
        axios.get(`https://localhost:3033/attach/${todoid}`).then(res => {
            this.props.loadAttachApart(res.data)
            console.log(res.data)
        })
    }

    render() {
        return (
            <DirectorTodoAttachments attachmentsApart={this.props.attachmentsApart}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {

        attachmentsApart: state.directorPage.todoapart.tempValues.attachmentsApart

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        loadAttachApart: (attach) =>{
            dispatch(loadAttachApart(attach))
        }

    }
}
const contWithRouter = withRouter(DirectorTodoAttachmentsContainer)
export default connect(mapStateToProps, mapDispatchToProps)(contWithRouter)