import React from 'react'
import modules from './DirectorTodoApart.module.css'
import DirectorTodoAttachmentsContainer from './Attachments/DirectorTodoAttachmentsContainer'
import { setCommentTodo } from '../../../../../../redux/director-reducer'

const DirectorTodoApart = (props) => {
    console.log('hereee')
    console.log(props)
    let onChangeHandler = event => {
        console.log(event.target.files[0])
        props.tempAttach(event.target.files[0])
        console.log(props.tempAttachP)
    }
    let onChangeNotes = (e) => {

        props.tempNotes(e.target.value);
        
    }

    let isDoneBtn = (e) =>{
        let tmpdata = { todo_id: null, worker_id: null };
        tmpdata.todo_id = e.todo_id
        tmpdata.worker_id = e.worker_id

        console.log(tmpdata)

        props.setStatusDone(tmpdata)


    }

    let onUpdateBtn = (e) => {

        let tmpdata = { todo_id: null, worker_id: null };

        if (!props.tempAttachP) {
            tmpdata.todo_id = e.todo_id
            tmpdata.note = props.tempNotesP
            tmpdata.worker_id = props.actualwkid

        } else {
            tmpdata = props.tempAttachP
            tmpdata.todo_id = e.todo_id
            tmpdata.note = props.tempNotesP
            tmpdata.worker_id = props.actualwkid
        }
        // console.log(tmpdata)
        // console.log(tmpdata)
        props.uploadfiles(tmpdata)
        props.setUpdateTodo(tmpdata)
    }

    if (props.todo === null) {
        return (
            <div>Loading...</div>
        )
    }
    return (

        <div className={modules.gencontainer}>
            <div className={modules.lcont}>
                <div className={modules.lcontcont}>
                    {props.todo.map(todo => {
                        let fileidname = toString(todo.todo_id + "file")
                        return (
                            <div class="jumbotron" style={{ height: '844px' }}>
                                <h1 class="display-4">{todo.subject}</h1>
                                <br />
                                <p class="lead">{todo.todo_comment}</p>
                                <hr class="my-5" />
                                <form><div class="form-group">
                                    <label for="exampleFormControlTextarea1">Enter your comment here:</label>
                                    <textarea class="form-control" onChange={onChangeNotes} id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div></form>
                                <p>Attach files</p>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Example file input</label>
                                        <input type="file" onChange={onChangeHandler} class="form-control-file" multiple id="exampleFormControlFile1" />
                                    </div>
                                </form>
                                <p class="lead">
                                    <button class="btn btn-primary btn-lg" onClick={() => onUpdateBtn({ worker_id: todo.worker_id, todo_id: todo.todo_id })}  role="button">UPDATE</button>
                                    <button class="btn btn-primary btn-lg" onClick={() => isDoneBtn({ worker_id: todo.worker_id, todo_id: todo.todo_id })}  style={{margin: '7px'}} >Is DONE!</button>
                                    {/* <img src={require('./../../../../../uploads/35896.png')} /> */}

                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={modules.rcontcont}>
                <DirectorTodoAttachmentsContainer className={modules.rcont} />
            </div>
        </div>

    )
}

export default DirectorTodoApart;