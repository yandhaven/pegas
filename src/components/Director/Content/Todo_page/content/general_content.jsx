import React from 'react'
import modules from './content.module.css'

const GeneralContent = () => {
    return (
        <div className={modules.gencontent}>
            <h5 className="bg-dark rounded-lg text-light" style={{ textAlign: "center" }}>TO DO List activity</h5>
            <div className={modules.tablecont}>

                <table class="table table-hover bg-light shadow rounded-lg " >
                    <thead class="thead-dark thead-rounded-lg">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Worker</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Work ID</th>
                            <th scope="col" style={{ textAlign: 'center' }}>To DO(comment)</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Status</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Last time UPD</th>
                            <th scope="col" style={{ textAlign: 'center' }}>Options</th>
                        </tr>
                    </thead>
                    <tbody class="rounded-lg">
                        <tr class="shadow table-success ">
                            <th scope="row">1</th>
                            <td>Ira</td>
                            <td>#000123</td>
                            <td>Sdelati statistiku</td>
                            <td>DONE <i class="far fa-check-circle"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button></td>
                        </tr>
                        <tr class="shadow table-warning">
                            <th scope="row">2</th>
                            <td>Olea</td>
                            <td>#000123</td>
                            <td>Proveriti fail</td>
                            <td>PENDING <i class="fas fa-sync"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><span><button type="button" class="btn btn-warning" style={{ margin: "3px" }}>Remind</button><button type="button" class="btn btn-secondary" style={{ margin: "3px" }}>Cancel</button></span></td>
                        </tr>
                        <tr class="shadow table-info">
                            <th scope="row">3</th>
                            <td>Alla</td>
                            <td>#000123</td>
                            <td>Zabiti zeleonki</td>
                            <td>PARTIAL <i class="fas fa-exclamation-triangle"></i><i class="fas fa-sync"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><span><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button><button type="button" class="btn btn-warning" style={{ margin: "3px" }}>Remind</button></span></td>

                        </tr>

                        <tr class="shadow table-success ">
                            <th scope="row">1</th>
                            <td>Ira</td>
                            <td>#000123</td>
                            <td>Sdelati statistiku</td>
                            <td>DONE <i class="far fa-check-circle"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button></td>
                        </tr>
                        <tr class="shadow table-warning">
                            <th scope="row">2</th>
                            <td>Olea</td>
                            <td>#000123</td>
                            <td>Proveriti fail</td>
                            <td>PENDING <i class="fas fa-sync"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><span><button type="button" class="btn btn-warning" style={{ margin: "3px" }}>Remind</button><button type="button" class="btn btn-secondary" style={{ margin: "3px" }}>Cancel</button></span></td>
                        </tr>
                        <tr class="shadow table-info">
                            <th scope="row">3</th>
                            <td>Alla</td>
                            <td>#000123</td>
                            <td>Zabiti zeleonki</td>
                            <td>PARTIAL <i class="fas fa-exclamation-triangle"></i><i class="fas fa-sync"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><span><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button><button type="button" class="btn btn-warning" style={{ margin: "3px" }}>Remind</button></span></td>

                        </tr>

                        <tr class="shadow table-success ">
                            <th scope="row">1</th>
                            <td>Ira</td>
                            <td>#000123</td>
                            <td>Sdelati statistiku</td>
                            <td>DONE <i class="far fa-check-circle"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button></td>
                        </tr>
                        <tr class="shadow table-warning">
                            <th scope="row">2</th>
                            <td>Olea</td>
                            <td>#000123</td>
                            <td>Proveriti fail</td>
                            <td>PENDING <i class="fas fa-sync"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><span><button type="button" class="btn btn-warning" style={{ margin: "3px" }}>Remind</button><button type="button" class="btn btn-secondary" style={{ margin: "3px" }}>Cancel</button></span></td>
                        </tr>
                        <tr class="shadow table-info">
                            <th scope="row">3</th>
                            <td>Alla</td>
                            <td>#000123</td>
                            <td>Zabiti zeleonki</td>
                            <td>PARTIAL <i class="fas fa-exclamation-triangle"></i><i class="fas fa-sync"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><span><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button><button type="button" class="btn btn-warning" style={{ margin: "3px" }}>Remind</button></span></td>

                        </tr>

                        <tr class="shadow table-success ">
                            <th scope="row">1</th>
                            <td>Ira</td>
                            <td>#000123</td>
                            <td>Sdelati statistiku</td>
                            <td>DONE <i class="far fa-check-circle"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button></td>
                        </tr>
                        <tr class="shadow table-warning">
                            <th scope="row">2</th>
                            <td>Olea</td>
                            <td>#000123</td>
                            <td>Proveriti fail</td>
                            <td>PENDING <i class="fas fa-sync"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><span><button type="button" class="btn btn-warning" style={{ margin: "3px" }}>Remind</button><button type="button" class="btn btn-secondary" style={{ margin: "3px" }}>Cancel</button></span></td>
                        </tr>
                        <tr class="shadow table-info">
                            <th scope="row">3</th>
                            <td>Alla</td>
                            <td>#000123</td>
                            <td>Zabiti zeleonki</td>
                            <td>PARTIAL <i class="fas fa-exclamation-triangle"></i><i class="fas fa-sync"></i></td>
                            <td>12/01/2020 16:34</td>
                            <td><span><button type="button" class="btn btn-info" style={{ margin: "3px" }}>Info</button><button type="button" class="btn btn-warning" style={{ margin: "3px" }}>Remind</button></span></td>

                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default GeneralContent;