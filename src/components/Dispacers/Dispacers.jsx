import React from 'react';
import modules from './../Dispacers/Dispatcers.module.css';
import speedIcon from './../icons/speed24px.svg';
import personIcon from './../icons/person24px.svg';
import mobileIcon from './../icons/mobile24px.svg';
import vehicleIcon from './../icons/vehicle24px.svg';
import kmtodayIcon from './../icons/kmtoday24px.svg';
import HEREMap, { Marker } from 'here-maps-react';


import { NavLink } from 'react-router-dom'
import SideCard from './Sidecard/SideCard';

let Trucks = (props) => {

    if (props.trucks === null) {
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

        <div>
        

            <div className={modules.gridcontainer}>


                {
                    props.trucks.map(u => {

                        let odoKm = Math.ceil(u.odometerCanbus);

                        let driverName = () => {
                            if (!u.driverName) {
                                return "NO DRIVER"
                            } else {
                                return u.driverName
                            }
                        }

                        let cardcolor = () => {

                            if (odoKm >= 600000 || !odoKm) {

                                return ("card mb-3 shadow p-3 rounded")

                            }


                            if (odoKm <= 400000) {

                                return ("card text-white bg-warning mb-3 shadow p-3 rounded")

                            }
                        }

                        let kmdone = Math.ceil(u.odometerCanbus / 10000);
                        let kmtoday = Math.ceil(u.odometerCanbus / 1000 - 200);


                        return (<div>
                            <NavLink to={"/disp/truck/" + u.id} data-toggle="tooltip" data-html="true" title="Click for details">

                                <div key={u.id}>



                                    <div class="card mb-3 shadow-lg p-3 rounded-lg border itemCard" style={{ maxWidth: 18 + "rem" }}>
                                        <div class="card-header shadow border rounded-pill text-muted h5 "><img src={vehicleIcon} /> {u.licensePlate}</div>
                                        <div class="card-body">
                                            <p class="card-text h6"><img src={personIcon} /> {driverName()}</p>
                                            <p class="card-text h6"><img src={mobileIcon} /> {u.field2}</p>
                                            <p class="card-text h6"><img src={speedIcon} /> {odoKm} Km</p>
                                            <h5 class="card-title h6"><img src={kmtodayIcon} /> {kmtoday} Km</h5>
                                            <div class="progress shadow rounded-lg border">
                                                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: kmdone + "%" }} aria-valuenow={kmdone} aria-valuemin="0" aria-valuemax="100">{kmdone}%</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </NavLink>
                        </div>

                        )
                    })
                }



            </div>
        </div>

    )
}

export default Trucks;