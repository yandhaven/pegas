import React from 'react'
import modules from './TodoContabTable.module.css'
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';


const TodoContabTable = (props) => {
    if (props.todos === null) {
        return (
            <div>Loading...</div>
        )
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
                            <th scope="col" style={{ textAlign: 'center' }}>Subject</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Status</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Create date</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Last time UPD</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Untill!</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Options</th>
                        </tr>
                    </thead>
                    <tbody class="rounded-lg">

                        {props.todos.map(todos => {
                            return (

                                <tr class="shadow ">
                                    <th scope="row"><NavLink to={'/contab/'+todos.worker_id+'/todo/'+todos.todo_id}>{todos.todo_id}</NavLink></th>
                                    <td>{todos.worker_name}</td>
                                    <td>{todos.subject}</td>
                                    <td>Some status <i class="far fa-check-circle"></i></td>
                                    <td><Moment format="YYYY/MM/DD">{todos.create_date}</Moment></td>
                                    <td><Moment format="YYYY/MM/DD">{todos.todo_last_update}</Moment></td>
                                    <td><Moment format="YYYY/MM/DD">{todos.till_date}</Moment></td>
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
export default TodoContabTable;