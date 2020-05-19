import React from 'react'
import modules from './General.module.css'
import MiddleChart from './middle_content/MiddleChart'
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
            <div className={modules.middle_s_c}>
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
                </div></div>

            <div className={modules.bot_c}>

                <h5 className="bg-dark rounded-lg text-light" style={{textAlign: "center"}}>TO DO List activity</h5>

                <table class="table table-hover bg-light shadow rounded-lg " >
                    <thead class="thead-dark thead-rounded-lg">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Worker</th>
                            <th scope="col">To DO(comment)</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="shadow table-success ">
                            <th scope="row">1</th>
                            <td>Ira</td>
                            <td>Sdelati statistiku</td>
                            <td>DONE <i class="far fa-check-circle"></i></td>
                        </tr>
                        <tr class="shadow table-warning">
                            <th scope="row">2</th>
                            <td>Olea</td>
                            <td>Proveriti fail</td>
                            <td>PENDING <i class="fas fa-sync"></i></td>
                        </tr>
                        <tr class="shadow table-info">
                            <th scope="row">3</th>
                            <td>Alla</td>
                            <td>Zabiti zeleonki</td>
                            <td>PARTIAL <i class="fas fa-exclamation-triangle"></i><i class="fas fa-sync"></i></td>
                        </tr>
                    </tbody>
                </table>


            </div>


        </div>



    )
}

export default General;