import React from 'react'
import modules from './../content.module.css'
import Moment from 'react-moment'
import { NavLink } from 'react-router-dom'

const GeneralContent = (props) => {

    console.log(props)
    if (props.todos === null) {
        return <div className={modules.loader}>
            <div class="text-center">
                <br />


                <div class="spinner-grow" role="status">

                    <span >Loading data...</span>
                </div>
            </div>
        </div>

    }

    const onClickArchive = (e) => {
        props.setArchive({ e: e, actualwkID: props.actualwkID })
        console.log(`Todo ${e} is archived`)

    }

    const onClickRemind = (data)=>{
        console.log(data)
        props.isRemind(data);



    }


    return (
        <div className={modules.gencontent}>
            <h5 className="bg-dark rounded-lg text-light" style={{ textAlign: "center" }}>TO DO List activity</h5>
            <div className={modules.tablecont}>

                <table class="table table-hover bg-light shadow rounded-lg " >
                    <thead class="thead-dark thead-rounded-lg">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Worker</th>
                            <th scope="col" style={{ textAlign: 'center' }}>To DO(comment)</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Status</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Last time UPD</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Untill!</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Options</th>
                        </tr>
                    </thead>
                    <tbody class="rounded-lg">
                        {props.todos.map(task => {

                            console.log('here is . . . ')

                            console.log(task)


                            if (!task.archived) {

                                /*status check */
                                const statuscheck = () => {

                                    if (task.todo_status === 'done') {
                                        return <td>{task.todo_status} <i class="far fa-check-circle"></i></td>
                                    }

                                    if (task.todo_status === 'pending') {
                                        return <td>{task.todo_status} <i class="fas fa-sync"></i></td>
                                    }

                                    if (task.todo_status === 'not read') {
                                        return <td>{task.todo_status} <i class="fas fa-exclamation-triangle"></i></td>
                                    }

                                }

                                /* Buttons check*/
                                const btnCheck = () => {
                                    console.log(task)
                                    if (task.todo_status === 'done') {
                                        return <td><NavLink to={''+task.todo_id}><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button></NavLink><button type="button" onClick={() => onClickArchive(task.todo_id)} class="btn btn-secondary" style={{ margin: "3px" }}>archive</button></td>
                                    }

                                    if (task.todo_status === 'pending') {
                                        return <td><button type="button" class="btn btn-warning" onClick={()=>onClickRemind({todoid: task.todo_id, workerid: task.worker_id})} style={{ margin: "3px" }}>Remind</button><NavLink to={''+task.todo_id}><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button></NavLink><button type="button" onClick={() => onClickArchive(task.todo_id)} class="btn btn-secondary" style={{ margin: "3px" }}>archive</button></td>
                                    }

                                    if (task.todo_status === 'not read') {
                                        return <td><button type="button" class="btn btn-warning" onClick={()=>onClickRemind({todoid: task.todo_id, workerid: task.worker_id})} style={{ margin: "3px" }}>Remind</button><button type="button" onClick={() => onClickArchive(task.todo_id)} class="btn btn-secondary" style={{ margin: "3px" }}>archive</button></td>
                                    }
                                }


                                return (

                                    <tr class="shadow ">
                                        <th scope="row">{task.todo_id}</th>
                                        <td>{task.worker_name}</td>
                                        <td>{task.subject}</td>
                                        <td>{statuscheck()}</td>
                                        <td><Moment format="YYYY/MM/DD">{task.todo_last_update}</Moment></td>
                                        <td><Moment format="YYYY/MM/DD">{task.till_date}</Moment></td>
                                        {btnCheck()}
                                    </tr>

                                )


                            }


                        })}


                    </tbody>
                </table>
            </div>

            <h5 className="bg-dark rounded-lg text-light" style={{ textAlign: "center" }}>Archived</h5>
            <div className={modules.tablecont}>

                <table class="table table-hover bg-light shadow rounded-lg " >
                    <thead class="thead-dark thead-rounded-lg">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Worker</th>
                            <th scope="col" style={{ textAlign: 'center' }}>To DO(comment)</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Status</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Last time UPD</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Untill!</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Options</th>
                        </tr>
                    </thead>
                    <tbody class="rounded-lg">
                        {props.todos.map(task => {

                            if (task.archived) {
                                /*status check */
                                const statuscheck = () => {

                                    if (task.todo_status === 'done') {
                                        return <td>{task.todo_status} <i class="far fa-check-circle"></i></td>
                                    }

                                    if (task.todo_status === 'pending') {
                                        return <td>{task.todo_status} <i class="fas fa-sync"></i></td>
                                    }

                                    if (task.todo_status === 'not read') {
                                        return <td>{task.todo_status} <i class="fas fa-exclamation-triangle"></i></td>
                                    }

                                }

                                /* Buttons check*/
                                const btnCheck = () => {
                                    if (task.todo_status === 'done') {
                                        return <td><NavLink to={'todo' + '/' + task.todo_id}><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button></NavLink></td>
                                    }

                                    if (task.todo_status === 'pending') {
                                        return <td><NavLink to={'todo' + '/' + task.todo_id}><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button></NavLink></td>
                                    }

                                    if (task.todo_status === 'not read') {
                                        return <td><NavLink to={'todo' + '/' + task.todo_id}><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button></NavLink></td>
                                    }
                                }


                                return (

                                    <tr class="shadow ">
                                        <th scope="row">{task.todo_id}</th>
                                        <td>{task.worker_name}</td>
                                        <td>{task.subject}</td>
                                        <td>{statuscheck()}</td>
                                        <td><Moment format="YYYY/MM/DD">{task.todo_last_update}</Moment></td>
                                        <td><Moment format="YYYY/MM/DD">{task.till_date}</Moment></td>
                                        {btnCheck()}
                                    </tr>

                                )
                            }


                        })}


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default GeneralContent;