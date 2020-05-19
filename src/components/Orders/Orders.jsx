import React from 'react';
import modules from './Orders.module.css'
import dirverIcon from './images/driverseat.svg'
import loadIcon from './images/load24px.svg'
import pauseIcon from './images/pause24px.svg'
import { NavLink } from 'react-router-dom';


const Orders = () => {
    return (
        <div className={modules.gridcontainer}>

<div class="container bg-white shadow rounded-lg">
                    <h1 class="display-4">Orders flow</h1>
                    <table class="table table-hover table-responsive-lg ">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Date rcv</th>
                                <th scope="col">Truck</th>
                                <th scope="col">ZIP</th>
                                <th scope="col">Location</th>
                                <th scope="col">Reference</th>
                                <th scope="col">Status</th>
                                <th scope="col">Order Km</th>
                                <th scope="col">Progress</th>

                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr class="border  shadow">
                                <th scope="row"><NavLink to="/disp/123">001</NavLink></th>
                                <td>27/04/2020</td>
                                <td>B23</td>
                                <td>61226</td>
                                <td>France</td>
                                <td>LD4442</td>
                                <td><img src={dirverIcon} /></td>
                                <td>680 Km</td>
                                <td><div class="progress border border-dark  shadow-sm rounded-pill ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar" aria-valuenow="47" aria-valuemin="0" aria-valuemax="100" style={{ width: 47 + '%' }}>47%</div>
                                </div></td>

                            </tr>

                            <tr class="border  shadow bg-warning">
                                <th scope="row">002</th>
                                <td>10/05/2020</td>
                                <td>B09</td>
                                <td>33091</td>
                                <td>France</td>
                                <td>U+001234</td>
                                <td><img src={loadIcon} /></td>
                                <td>390 Km</td>
                                <td><div class="progress border border-dark  shadow-sm rounded-pill ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning " role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100" style={{ width: 1 + '%' }}>1%</div>
                                </div></td>

                            </tr>


                            <tr class="border  shadow">
                                <th scope="row">003</th>
                                <td>11/05/2020</td>
                                <td>B12</td>
                                <td>6080</td>
                                <td>Belgium</td>
                                <td>NO REF</td>
                                <td><img src={dirverIcon} /></td>
                                <td>58 Km</td>
                                <td><div class="progress border border-dark  shadow-sm rounded-pill ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: 80 + '%' }}>80%</div>
                                </div></td>

                            </tr>

                            <tr class="border  shadow">
                                <th scope="row">004</th>
                                <td>09/05/2020</td>
                                <td>B21</td>
                                <td>1800</td>
                                <td>Belgium</td>
                                <td>wheller</td>
                                <td><img src={dirverIcon} /></td>
                                <td>580 Km</td>
                                <td><div class="progress border border-dark  shadow-sm rounded-pill ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: 65 + '%' }}>65%</div>
                                </div></td>

                            </tr>

                            <tr class="border  shadow bg-info">
                                <th scope="row">005</th>
                                <td>12/05/2020</td>
                                <td>B33</td>
                                <td>33099</td>
                                <td>France</td>
                                <td>667333</td>
                                <td><img src={pauseIcon} /></td>
                                <td>700 Km</td>
                                <td><div class="progress border border-dark  shadow-sm rounded-pill ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-info " role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: 65 + '%' }}>65%</div>
                                </div></td>

                            </tr>
                            <tr class="border  shadow">
                                <th scope="row">006</th>
                                <td>12/05/2020</td>
                                <td>B10</td>
                                <td>60003</td>
                                <td>France</td>
                                <td>707888</td>
                                <td><img src={dirverIcon} /></td>
                                <td>552 Km</td>
                                <td><div class="progress border border-dark  shadow-sm rounded-pill ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: 65 + '%' }}>65%</div>
                                </div></td>

                            </tr>

                            <tr class="border  shadow">
                                <th scope="row">007</th>
                                <td>13/05/2020</td>
                                <td>B10</td>
                                <td>60003</td>
                                <td>France</td>
                                <td>707888</td>
                                <td><img src={dirverIcon} /></td>
                                <td>552 Km</td>
                                <td><div class="progress border border-dark  shadow-sm rounded-pill ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: 65 + '%' }}>65%</div>
                                </div></td>

                            </tr>

                            <tr class="border  shadow">
                                <th scope="row">007</th>
                                <td>13/05/2020</td>
                                <td>B10</td>
                                <td>60003</td>
                                <td>France</td>
                                <td>707888</td>
                                <td><img src={dirverIcon} /></td>
                                <td>552 Km</td>
                                <td><div class="progress border border-dark  shadow-sm rounded-pill ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: 65 + '%' }}>65%</div>
                                </div></td>

                            </tr>

                            <tr class="border  shadow">
                                <th scope="row">007</th>
                                <td>13/05/2020</td>
                                <td>B10</td>
                                <td>60003</td>
                                <td>France</td>
                                <td>707888</td>
                                <td><img src={dirverIcon} /></td>
                                <td>552 Km</td>
                                <td><div class="progress border border-dark  shadow-sm rounded-pill ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: 65 + '%' }}>65%</div>
                                </div></td>

                            </tr>

                            <tr class="border  shadow">
                                <th scope="row">007</th>
                                <td>13/05/2020</td>
                                <td>B10</td>
                                <td>60003</td>
                                <td>France</td>
                                <td>707888</td>
                                <td><img src={dirverIcon} /></td>
                                <td>552 Km</td>
                                <td><div class="progress border border-dark  shadow-sm rounded-pill ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: 65 + '%' }}>65%</div>
                                </div></td>

                            </tr>

                            <tr class="border  shadow">
                                <th scope="row">007</th>
                                <td>13/05/2020</td>
                                <td>B10</td>
                                <td>60003</td>
                                <td>France</td>
                                <td>707888</td>
                                <td><img src={dirverIcon} /></td>
                                <td>552 Km</td>
                                <td><div class="progress border border-dark  shadow-sm rounded-pill ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success " role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{ width: 65 + '%' }}>65%</div>
                                </div></td>

                            </tr>

                            


                        </tbody>
                    </table>
                </div>


            {/* <div class="jumbotron jumbotron-fluid shadow  rounded-lg">
               
            </div> */}

        </div>
    )
}

export default Orders;