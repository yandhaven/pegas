import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import modules from './Charts.module.css'
import { connect } from "react-redux"
import * as axios from 'axios'
// import { setTrucks } from '../../redux/disp-reducer'
import Charts from './Charts'
import { withRouter } from 'react-router-dom'

class ChartsSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: ['1', '2', '3', '4', '5'],
                datasets: [
                    {
                        label: "Some_label",
                        backgroundColor: "rgba(255,0,255,0.75)",
                        data: [4, 8, 2, 10, 28, 16, 3]
                    },

                    {
                        label: "Some_label2",
                        backgroundColor: "rgba(0,255,0,0.75)",
                        data: [3, 16, 28, 1, 5, 44, 21]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className={modules.sidechart}>
                <div style={{ position: "relative", width: 450, height: 400 }}>
                    <h3>
                        Chart example
                </h3>
                    <Line options={{
                        responsive: true
                    }}
                        data={this.state.data} />
                </div>
            </div>

        )
    }
}

const ChartsExample = () => {
    return (
        <div className={modules.sidechart}>
            <ChartsSample/>
        </div>
    )
}

export default ChartsExample;