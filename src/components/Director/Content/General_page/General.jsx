import React from 'react'
import modules from './General.module.css'
// import as24logo from './images/as24logo.png'

const General = () => {
    return (

        <div className={modules.gridcontainer}>

            <div className={modules.top_c}>



                <div class="card  mb-3 shadow rounded-lg bg-transparent" style={{ width: "370px"}}>
                    <div className={modules.as24card}>
                        <div class="card-body text-warning bg-transparent">
                            <h5 class="display-4">6490 LITERS</h5>
                            <p class="card-text">TODAY AVG Diesel consumption</p>
                            <div class="card-footer bg-blue text-warning shadow-lg rounded-lg"><span class="fa fa-refresh"/> Updated 15 min ago.</div>
                        </div>                       
                    </div>
                </div>



                <div class="card  mb-3 shadow rounded-lg bg-transparent" style={{ width: "370px" }}>
                    <div className={modules.twcard}>
                        <div class="card-body text-light bg-transparent">
                            <h5 class="display-4">21 of 43 <span/> <span class="fa fa-truck"/></h5>
                            <p class="card-text">Trucks right now on work </p>
                            <div class="card-footer text-light shadow-lg rounded-lg"><span class="fa fa-refresh"/> Updated 12 min ago.</div>
                        </div>                       
                    </div>
                </div>

                <div class="card  mb-3 shadow rounded-lg bg-transparent" style={{ width: "370px"}}>
                    <div className={modules.as24card}>
                        <div class="card-body text-warning bg-transparent">
                            <h5 class="display-4">6490 LITERS</h5>
                            <p class="card-text">TODAY AVG Diesel consumption</p>
                            <div class="card-footer bg-blue text-warning shadow-lg rounded-lg"><span class="fa fa-refresh"/> Updated 15 min ago.</div>
                        </div>                       
                    </div>
                </div>

                <div class="card  mb-3 shadow-lg rounded-lg bg-transparent" style={{ width: "370px"}}>
                    <div className={modules.as24card}>
                        <div class="card-body text-warning bg-transparent">
                            <h5 class="display-4">6490 LITERS</h5>
                            <p class="card-text">TODAY AVG Diesel consumption</p>
                            <div class="card-footer bg-blue text-warning shadow-lg rounded-lg"><span class="fa fa-refresh"/> Updated 15 min ago.</div>
                        </div>                       
                    </div>
                </div>

            </div>
            <div className={modules.medium_c}>some contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome content</div>
            <div className={modules.medium_s_c}>somsome contentsome contentsome contentsome contente content
            some content</div>

            <div className={modules.bot_c}>some content some contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome content</div>


        </div>



    )
}

export default General;