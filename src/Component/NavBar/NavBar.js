import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@material-ui/core/Grid'
import fblogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
import Avatar from '@material-ui/core/Avatar';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Grid container className="navbar_main">
                    <Grid item xs={3}><div className='navbar_leftbar'>
                        
                        <input className='navbar_search' type="text" placeholder='Search FriendsHub'/>
                    </div></Grid>

                    <Grid item xs={6}> <div className="navbar_container">
                        <div className="navbar_tabs active ">
                        <img src={home} height="35px" width="35px"/>
                        </div>
                        <div className="navbar_tabs">
                        <img src={page} height="35px" width="35px"/>
                        </div>
                        <div className="navbar_tabs">
                        <img src={watch} height="35px" width="35px"/>
                        </div>
                        <div className="navbar_tabs">
                        <img src={market} height="35px" width="35px"/>
                        </div>
                        <div className="navbar_tabs">
                        <img src={group} height="35px" width="35px"/>
                        </div>

                    </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className="navbar_right">
                            <div className='navbar_righttab'>
                                <Avatar className="navbar_rightimg" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seekpng.com%2Fipng%2Fu2y3q8t4t4o0a9a9_my-profile-icon-blank-profile-image-circle%2F&psig=AOvVaw0bjVOQqtYUiErEOtnglMmY&ust=1641892014256000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJjqu8bqpvUCFQAAAAAdAAAAABAD" />
                               <div className='navbar_profilename'>Name</div>
                                </div>

                        </div>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

export default NavBar;