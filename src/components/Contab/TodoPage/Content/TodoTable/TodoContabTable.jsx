import React from 'react'
import modules from './TodoContabTable.module.css'
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';


const TodoContabTable = () => {
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
                        <tr class="shadow ">
                            <th scope="row"><NavLink to='/todo/id'>21</NavLink></th>
                            <td>Some text</td>
                            <td>Some text</td>
                            <td>Some text <i class="far fa-check-circle"></i></td>
                            <td><Moment format="YYYY/MM/DD">2020/05/05</Moment></td>
                            <td><Moment format="YYYY/MM/DD">2020/05/05</Moment></td>
                            <td><Moment format="YYYY/MM/DD">2020/05/05</Moment></td>
                            <td><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button></td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default TodoContabTable;