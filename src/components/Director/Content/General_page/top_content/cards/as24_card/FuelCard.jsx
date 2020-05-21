import React from 'react'
import modules from './FuelCard.module.css'

const FuelCard = () => {
    return (
        <div>
            <div class="card  mb-3 shadow rounded-lg bg-transparent" style={{ width: "370px" }}>
                <div className={modules.as24card}>
                    <div class="card-body text-warning bg-transparent">
                        <h5 class="display-4">6490 liters <i class="fas fa-gas-pump"></i></h5>
                        <p class="card-text">You consummed 6490 liters of diesel today !</p>
                        <div class="card-footer bg-blue text-warning shadow-lg rounded-lg"><span class="fa fa-refresh" /> Updated 15 min ago.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FuelCard;