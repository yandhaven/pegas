import React from 'react'
import modules from './../content.module.css'
import Moment from 'react-moment'

const GeneralContent = (props) => {

    console.log('form test')
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
                            return (

                                <tr class="shadow ">
                                    <th scope="row">{task.todo_id}</th>
                                    <td>{task.worker_name}</td>
                                    <td>{task.todo_comment}</td>
                                    <td>{task.todo_status} <i class="far fa-check-circle"></i></td>
                                    <td><Moment format="YYYY/MM/DD">{task.todo_last_update}</Moment></td>
                                    <td><Moment format="YYYY/MM/DD">{task.till_date}</Moment></td>
                                    <td><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button></td>
                                </tr>

                            )
                        })}


                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default GeneralContent;