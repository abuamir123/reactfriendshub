import { Avatar, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import "./PostContainer.css";
import post from "../../../../images/post.jpeg";
import like from "../../../../images/like.png";
import likebutton from "../../../../images/likebutton.png";
import commentbutton from "../../../../images/comment.png";
import sharebutton from "../../../../images/share.png";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    isImageAvailable=(data)=>
    {
        return data==""?false:true;
    }
    render() { 
        return ( <div>
            <Paper className="post_container">
                
                    <div className='post_header'>
                        <div className='post_header_img'>
                            <Avatar src="" className='post_img'/>
                            
                        </div>
                        <div className='post_header_text'>
                        {this.props.object.user_name}
                        </div>

                    </div>
                {/*description */}
                <div className='post_description'>
                {this.props.object.description}
                </div>
                {/*Image */}
                <div className="post__image">
                        {
                            this.isImageAvailable(this.props.object.postImgURL) ? <img src={this.props.object.postImgURL} width="700px" /> : <span></span>
                        }
                    </div>
                {/*like */}
                <div className="post__likeCountContainer">
                        <div className="post__like">
                            <img className="post__img" src={like} />
                        </div>
                        <div className="post__likecount">
                        {this.props.object.like}
                        </div>
                        <div className="post__commentcount">
                            comments
                        </div>
                    </div>
                    {/*like share box*/}
                    <div className="post__likeShare">
                        <div className="post__tab">
                            <div className="post__tabfirst">
                                <img className="post__tabimg" src={likebutton} />
                            </div>
                            <div className="post__tabtext">
                                Like
                            </div>
                        </div>

                        <div className="post__tab">
                            <div className="post__tabfirst">
                                <img className="post__tabimg" src={commentbutton} />
                            </div>
                            <div className="post__tabtext">
                                Comment
                            </div>
                        </div>

                        <div className="post__tab">
                            <div className="post__tabfirst">
                                <img className="post__tabimg" src={sharebutton} />
                            </div>
                            <div className="post__tabtext">
                                Share
                            </div>
                        </div>
                    </div>

                         {/* comment box */}
                       <div>
                       <div className="upload__top">
                    <div>
                        <Avatar src=""className="upload_img"/>
                    </div>
                    <div>
                        <input className="upload__box" placeholder="What's on your mind ?" type="text" />
                    </div>
                </div>
                       </div>

            </Paper>
            
        </div>
             );
    }
}
 
export default Post;