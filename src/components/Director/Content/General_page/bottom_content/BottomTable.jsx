import React from 'react'
import modules from './BottomTable.module.css'

const BottomTable = () => {
    return (
        <div>
            <h5 className="bg-dark rounded-lg text-light" style={{ textAlign: "center" }}>TO DO List activity</h5>

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
    )
}

export default BottomTable;