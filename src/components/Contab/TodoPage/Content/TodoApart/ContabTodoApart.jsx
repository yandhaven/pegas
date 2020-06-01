import React from 'react'
import modules from './ContabTodoApart.module.css'
import ContabTodoAttachmentsContainer from './Attachments/ContabTodoAttachmentsContainer'


const ContabTodoApart = (props) => {


    let onChangeHandler = event => {

        console.log(event.target.files[0])
        props.tempAttach(event.target.files[0])
        console.log(props.tempAttachP)
    }

    let onChangeNotes = (em) => {

        props.tempNotes(em.e.target.value);
        props.tempTodoid(em.todo_id)
        console.log(props.todoidtmp)

    }

    let onUpdateBtn = () => {

        let tmpdata = { todo_id: null };

        if (!props.tempAttachP) {
            tmpdata.todo_id = props.todoidtmp
            tmpdata.note = props.tempNotesP

        } else {

            tmpdata = props.tempAttachP
            tmpdata.todo_id = props.todoidtmp
            tmpdata.note = props.tempNotesP

        }

        props.uploadfiles(tmpdata)
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
                                    <textarea class="form-control" onChange={(e) => onChangeNotes({ e: e, todo_id: todo.todo_id })} id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div></form>
                                <p>Attach files</p>
                                <form>
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Example file input</label>
                                        <input type="file" onChange={onChangeHandler} class="form-control-file" multiple id="exampleFormControlFile1" />
                                    </div>
                                </form>
                                <p class="lead">
                                    <a class="btn btn-primary btn-lg" onClick={onUpdateBtn} href="#" role="button">UPDATE</a>
                                    {/* <img src={require('./../../../../../uploads/35896.png')} /> */}


                                </p>
                            </div>
                        )
                    })}

                </div>
            </div>

            <div className={modules.rcontcont}>

                <ContabTodoAttachmentsContainer/>

            </div>




        </div>





    )
}

export default ContabTodoApart;