import React, { Component } from 'react';
import { Avatar, Paper } from '@material-ui/core';
import "./UploadSection.css";
class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div>
             <Paper className="upload_Container" >
             <div className='upload_top'>
                 <div>
                     <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seekpng.com%2Fipng%2Fu2y3q8t4t4o0a9a9_my-profile-icon-blank-profile-image-circle%2F&psig=AOvVaw0bjVOQqtYUiErEOtnglMmY&ust=1641892014256000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJjqu8bqpvUCFQAAAAAdAAAAABAD" className="upload_img" />
                 </div>
                 <div>
                     <input className='upload_box' type="text" placeholder='Whats in your mind?'/>            
                 </div>
             </div>
             <div className='upload_bottom'></div>
             </Paper>

        </div>
            );
    }
}
 
export default UploadSection;