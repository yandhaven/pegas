import React from 'react'
import { connect } from 'react-redux'
import WorkerLoader from './WorkersLoadre'
import { loadWorkers } from '../../../../../../../redux/director-reducer'
import * as axios from 'axios'

class LoadWorkers extends React.Component{

    state= {
        workers: null
    }

    componentDidMount(){
        
        axios.get('https://localhost:3033/workers').then(response =>{
            this.setState({workers: response.data})
                      
        })       
    }
    render(){

        let workers = this.state.workers
        
        return <WorkerLoader onselectName={this.props.onselectName} workers={workers} />
    }
}

const mapStateToProps =(state)=>{
    return{

        workers: state.directorPage.workers

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{

        loadWorkers: (workers)=>{
            dispatch(loadWorkers(workers))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadWorkers)