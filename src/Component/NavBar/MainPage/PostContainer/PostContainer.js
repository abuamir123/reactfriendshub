import React, { Component } from 'react';
import Post from "./Post";
import post_img from "../../../../images/post.jpeg";
class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }
    getData=()=>{
        //calling rest api from back end
        let json=[
            {
                        "post_ID": 1,
                        "user_id": 12345678,
                        "user_img": "url....",
                        "user_name": "Ravi",
                        "description": "Loved this wallpaper...",
                        "post_img" : post_img,
                         "like": "25"
                    },
                    {
                        "post_ID": 2,
                        "user_id": 12345678,
                        "user_img": "",
                        "user_name": "Technical Interview",
                        "description": "this is a dummy description for testing purpose",
                        "post_img" :"",
                        "like": "125"
                    }
           
        ]
        this.setState({data:json});
    }
    componentDidMount()
    {
        this.getData();
    }
    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                        <Post object={item} />
                    ))
                }
            </div>
         );
    }
}
 
export default PostContainer;