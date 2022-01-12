import React from 'react'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import userService from '../services/UserService'
import './Registration.css';
import {Navigate,Link, Routes, Route} from 'react-router-dom'
//import {Login}form './LoginComponent/Login'
class Registration extends React.Component {
    constructor(){
        super()
        this.state = {
            regmsg:'',
            regstatus:false
        }
    }
        register = (event)=>{
            var ob = {
                userName : this.namebox.value,
                email : this.emailbox.value,
                password : this.pwdbox.value,
               
            }
            console.log(ob)
         
          userService.registerUser(ob).then(response=>response.json()).then(data=>{
            console.log(data)
            this.setState({regmsg:data.msg})
            if(data.status)
               this.setState({regstatus:true})
        });;
        

            event.preventDefault()
        }
    
    render(){
        if(this.state.regstatus){
            return <Navigate to="/"/>
        } 
        return <div>
         
         <div className="container">
         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-up">Sign up</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

     
      <br></br>
         <br></br>
          <form onSubmit={this.register}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input ref={c=>this.namebox=c} type="text" className="form-control" placeholder="First name" required/>
                </div>
                <br></br>
               

                <div className="form-group">
                    <label>Email</label>
                    <input ref={c=>this.emailbox=c} type="email" className="form-control" placeholder="Enter email" required/>
                </div>
                <br></br>

                <div className="form-group">
                    <label>Password</label>
                    <input ref={c=>this.pwdbox=c} type="password" className="form-control" placeholder="Enter password" required/>
                </div>
                <br></br>
                <div >
                                &nbsp;
                                <b className='text-danger'>{this.state.regmsg}</b>
                             
                            </div>
                            <br></br>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/">log in?</a>
                </p>
            </form>
            </div>
        </div>
        
    }
}
export default Registration