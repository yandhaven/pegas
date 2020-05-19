import React from 'react'
import { connect } from "react-redux"
import * as axios from 'axios'
import Dispacers from './Dispacers'
import { setTrucks } from '../../redux/disp-reducer'
import Trucks from './Dispacers'
import { withRouter } from 'react-router-dom'

class DispClass extends React.Component {

    componentDidMount(){
        axios.get(`https://v2api.frotcom.com/v2/vehicles?api_key=ff6db0e2-fea8-4c3e-bb4e-43fd9b9d59f1`).then(response => {
            this.props.setTrucks(response.data)
            console.log(response.data)
            console.log(this.props)
        })
    }

   

    render() {
        return <Trucks trucks={this.props.trucks}
         />
    }

}


let mapStateToProps = (state) => {
    return{

        trucks: state.dispPage.trucks

    }
}

let mapDispatchToProps = (dispatch) => {
    return {

        setTrucks: (trucks) => {
            dispatch(setTrucks(trucks));
        }

    }
}

const dispWithRouter = withRouter(DispClass)

export default connect(mapStateToProps, mapDispatchToProps)(dispWithRouter);