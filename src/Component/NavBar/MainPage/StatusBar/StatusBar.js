import React, { Component } from 'react';
import "./StatusBar.css";
import Status from './Status';
class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }

    getData=()=>{
        const thisContext=this;
        fetch("http://localhost:8080/status/getAllStatus")
        .then(response => response.json())
        .then(json => {
            thisContext.setState({data : json});
        })
        .catch(error =>{

        })
    }

    componentDidMount(){
        this.getData();
    }

    render() { 
        return ( 
            <div className="statusbar__container">
                <Status uploader="true" />
                {
                    this.state.data.map((item)=>(
                        <Status object={item} />
                    ))
                }
            </div>
         );
    }
}
 
export default StatusBar;