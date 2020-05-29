import React from "react";
import DatePicker from "react-datepicker";
import {dateFormat} from 'dateformat'

import 'react-datepicker/dist/react-datepicker.css'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DattePicker extends React.Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        

        this.setState({
            startDate: date
        });
        this.setDate(date)
    };

    setDate = (date) => {

        this.props.setDate(date)

    }

    render() {

        return (
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        );
    }
}
export default DattePicker;