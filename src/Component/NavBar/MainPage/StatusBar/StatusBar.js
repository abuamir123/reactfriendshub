import React, { Component } from 'react';
import "./StatusBar.css";
import Status from './Status';
class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='statusbar_container'>
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />
                <Status />

            </div>
         );
    }
}
 
export default StatusBar;