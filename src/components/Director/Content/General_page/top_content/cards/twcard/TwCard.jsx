import React from 'react'
import modules from './TwCard.module.css'

const TwCard = () => {
    return (
        <div class="card  mb-3 shadow rounded-lg bg-transparent" style={{ width: "370px" }}>
            <div className={modules.twcard}>
                <div class="card-body text-light bg-transparent">
                    <h5 class="display-4">21 of 43 <span /> <span class="fa fa-truck" /></h5>
                    <p class="card-text">You have 21 of 43 trucks right now on work! </p>
                    <div class="card-footer text-light shadow-lg rounded-lg"><span class="fa fa-refresh" /> Updated 12 min ago.</div>
                </div>
            </div>
        </div>
    )
}
export default TwCard;