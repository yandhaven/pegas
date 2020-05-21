import React from 'react'
import modules from './MIddleRSide.module.css'

const MiddleRSide = () => {
    return (
        <div> 

<div class="card shadow rounded" style={{ width: "100%" }}>
                    <div class="card-header h4 bg-dark text-light" style={{ textAlign: "center" }}>Workers activity</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div className={modules.sidetable}>
                                <table class="table" >
                                    <caption>List of users</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{ textAlign: "center" }}>#</th>
                                            <th scope="col" style={{ textAlign: "center" }}>Worker</th>
                                            <th scope="col" style={{ textAlign: "center" }}>Action</th>
                                            <th scope="col" style={{ textAlign: "center" }}>Last seen</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Dima</td>
                                            <td>Fuel: B35</td>
                                            <td>14:31 19/05/2020</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Ira</td>
                                            <td>Sent Invoice #000132 to Valik</td>
                                            <td>19:55 18/05/2020</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Ira</td>
                                            <td>Updated Green card B18</td>
                                            <td>17:31 18/05/2020</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Ira</td>
                                            <td>Updated Green card B18</td>
                                            <td>17:31 18/05/2020</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Ira</td>
                                            <td>Updated Green card B18</td>
                                            <td>17:31 18/05/2020</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>



                        </li>

                    </ul>
                </div>

        </div>
    )
}

export default MiddleRSide;