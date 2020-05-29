import React from 'react'


const WorkerLoader = (props) => {

    if(props.workers=== null){
        return<div>Loading data...</div>
    }
    
    return (
        <select class="custom-select" onChange={props.onselectName} id="inputGroupSelect01">
            <option selected></option>

            {props.workers.map(worker => {
                
                if(props.workers === null){
                    return <div>Loading data...</div>
             
                }else{return <option value={worker.worker_id}>{worker.worker_name}</option>}
                
            })}

        </select>
    )
}

export default WorkerLoader;