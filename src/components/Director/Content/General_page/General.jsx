import React from 'react'
import modules from './General.module.css'
import MiddleChart from './middle_content/MiddleChart'
import MiddleRSide from './middle_content/MIddleRSide'
import BottomTable from './bottom_content/BottomTable'
// import as24logo from './images/as24logo.png'

const General = () => {
    return (

        <div className={modules.gridcontainer}>

            <div className={modules.top_c}>



                <div class="card  mb-3 shadow rounded-lg bg-transparent" style={{ width: "370px" }}>
                    <div className={modules.as24card}>
                        <div class="card-body text-warning bg-transparent">
                            <h5 class="display-4">6490 liters <i class="fas fa-gas-pump"></i></h5>
                            <p class="card-text">You consummed 6490 liters of diesel today !</p>
                            <div class="card-footer bg-blue text-warning shadow-lg rounded-lg"><span class="fa fa-refresh" /> Updated 15 min ago.</div>
                        </div>
                    </div>
                </div>



                <div class="card  mb-3 shadow rounded-lg bg-transparent" style={{ width: "370px" }}>
                    <div className={modules.twcard}>
                        <div class="card-body text-light bg-transparent">
                            <h5 class="display-4">21 of 43 <span /> <span class="fa fa-truck" /></h5>
                            <p class="card-text">You have 21 of 43 trucks right now on work! </p>
                            <div class="card-footer text-light shadow-lg rounded-lg"><span class="fa fa-refresh" /> Updated 12 min ago.</div>
                        </div>
                    </div>
                </div>

                <div class="card  mb-3 shadow rounded-lg bg-transparent" style={{ width: "370px" }}>
                    <div className={modules.invoicecard}>
                        <div class="card-body text-light bg-transparent">
                            <h5 class="display-4">4 Invoices <i class="fas fa-file-invoice-dollar"></i> </h5>
                            <p class="card-text">You have 4 overdue invoices!</p>
                            <div class="card-footer bg-blue text-light shadow-lg rounded-lg"><span class="fa fa-refresh" /> Updated 15 min ago.</div>
                        </div>
                    </div>
                </div>

                <div class="card  mb-3 shadow rounded-lg bg-transparent" style={{ width: "370px" }}>
                    <div className={modules.kmcard}>
                        <div class="card-body text-light bg-transparent">
                            <h5 class="display-4">16490 KM</h5>
                            <p class="card-text">You have done 16490 km today!</p>
                            <div class="card-footer bg-blue text-light shadow-lg rounded-lg"><span class="fa fa-refresh" /> Updated 15 min ago.</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={modules.middle_c}> <MiddleChart /> </div>
            <div className={modules.middle_s_c}> <MiddleRSide/></div>

            <div className={modules.bot_c}> <BottomTable/> </div>


        </div>



    )
}

export default General;