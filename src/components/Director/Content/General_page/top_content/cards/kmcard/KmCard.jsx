import React from 'react'
import modules from './KmCard.module.css'

const KmCard = () => {
    return (
        <div class="card  mb-3 shadow rounded-lg bg-transparent" style={{ width: "370px" }}>
            <div className={modules.kmcard}>
                <div class="card-body text-light bg-transparent">
                    <h5 class="display-4">16490 KM</h5>
                    <p class="card-text">You have done 16490 km today!</p>
                    <div class="card-footer bg-blue text-light shadow-lg rounded-lg"><span class="fa fa-refresh" /> Updated 15 min ago.</div>
                </div>
            </div>
        </div>
    )
}
export default KmCard;