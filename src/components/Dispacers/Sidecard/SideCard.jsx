import React from 'react';
import modules from './SideCard.module.css'
import banIcon from './images/trafficban.PNG'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const SideCard = () => {
    return (
        <div className={modules.sidecard} >
            <div>

                <div class="card mb-3 shadow-lg rounded">
                    <a href="trafficban.com">
                        <img src={banIcon} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Traffic Ban</h5>
                            <p class="card-text">The free online information service about traffic bans – trafficban.com</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>

                    </a>

                </div>

                <div className={modules.sidecardtable}>

                    <table class="table shadow-lg rounded">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Trip</th>
                                <th scope="col">Country</th>
                                <th scope="col">Km</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="table-success">
                                <th scope="row">B31</th>
                                <td>Unload</td>
                                <td>France</td>
                                <td>367 km</td>
                            </tr>
                            <tr class="table-warning">
                                <th scope="row">B11</th>
                                <td>Unload</td>
                                <td>Germany</td>
                                <td>410 Km</td>
                            </tr>
                            <tr class="table-warning">
                                <th scope="row">B15</th>
                                <td>Load</td>
                                <td>France</td>
                                <td>60 Km</td>
                            </tr>
                            <tr>
                                <th scope="row">B21</th>
                                <td>Unload</td>
                                <td>France</td>
                                <td>360 Km</td>
                            </tr>
                            <tr>
                                <th scope="row">B23</th>
                                <td>Load</td>
                                <td>Belgium</td>
                                <td>63 Km</td>
                            </tr>
                            <tr>
                                <th scope="row">B23</th>
                                <td>Unload</td>
                                <td>Belgium</td>
                                <td>670 Km</td>
                            </tr>
                            <tr class="table-success">
                                <th scope="row">B07</th>
                                <td>Unload</td>
                                <td>France</td>
                                <td>970 Km</td>
                            </tr>
                            <tr>
                                <th scope="row">B13</th>
                                <td>Unload</td>
                                <td>France</td>
                                <td>533 Km</td>
                            </tr>
                            <tr class="table-danger">
                                <th scope="row">B18</th>
                                <td>Load</td>
                                <td>Belgium</td>
                                <td>18 Km</td>
                            </tr>
                            
                        </tbody>
                    </table>


                </div>





            </div>



        </div>

    )
}

export default SideCard;