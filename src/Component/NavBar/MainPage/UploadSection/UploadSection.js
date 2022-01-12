import React, { Component } from 'react';
import { Avatar, Paper } from '@material-ui/core';
import "./UploadSection.css";
import live from "../../../../images/video.png";
import image from "../../../../images/image.png";
import feeling from "../../../../images/feelings.png";
import Dialog from '@material-ui/core/Dialog';
class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div>
             <Paper className="upload__container" >
                <div className="upload__top">
                    <div>
                        <Avatar src=""className="upload_img"/>
                    </div>
                    <div>
                        <input className="upload__box" placeholder="What's on your mind ?" type="text" />
                    </div>
                </div>
                <div  className="upload__bottom">
                    <div className="upload__tabs">
                        <img src={live} width="30px" />
                        <div className="upload__text">Live Video</div>
                    </div>
                    <div className="upload__tabs">
                        <label for="file-upload" className="upload__tabs">
                            <img src={image} width="30px" />
                            <div className="upload__text">Photo/Video</div>
                        </label>
                       <input type="file" id="file-upload" onChange={this.openDialog} />
                    </div>
                    <div className="upload__tabs">
                        <img src={feeling} width="30px" />
                        <div className="upload__text">Feeling/Activity</div>
                    </div>
                </div>
             </Paper>

        </div>
            );
    }
}
 
export default UploadSection;