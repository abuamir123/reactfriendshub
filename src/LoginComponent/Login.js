import React from 'react'
import userService from '../services/UserService'
import './Login.css';
import {Navigate,Link} from 'react-router-dom'
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            logmsg: '',
            logstatus:false
        }
    }
    login = (event) => {
        var ob = {

            email: this.emailbox.value,
            password: this.pwdbox.value,

        }
        console.log(ob)

        userService.loginUser(ob).then(response => response.json()).then(data => {
            console.log(data)
            this.setState({logmsg:data.msg})
            if(data.status)
            this.setState({logstatus:true})

        });;

        event.preventDefault()
    }
    render() {
        if(this.state.logstatus){
            return <Navigate to="/home"/>
        } 
        return <div>
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
            <form onSubmit={this.login}>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input ref={c => this.emailbox = c} type="email" className="form-control" placeholder="Enter email" required />
                </div>
                <br></br>

                <div className="form-group">
                    <label>Password</label>
                    <input ref={c => this.pwdbox = c} type="password" className="form-control" placeholder="Enter password" required />
                </div>
                <br></br>
                <div >
                    &nbsp;
                    <b className='text-danger'>{this.state.logmsg}</b>

                </div>
                <br></br>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    }
}
export default Login