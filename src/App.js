import React from 'react'
import Registration from './RegistrationComponent/Registration';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes ,Link, Route} from 'react-router-dom';
import Login from './LoginComponent/Login';

import NavBar from './Component/NavBar/NavBar'
import Layout from './Component/NavBar/MainPage/Layout'
import Profile from './Component/NavBar/Profile'
class App extends React.Component{
  render(){
    return <div>
      <Link to="/home"></Link>
      <Routes>
      <Route path="/home" element={<><NavBar /><Layout /></>} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    
     <div className="App">
     
     
      <div className="outer">
        <div className="inner">
          <Routes>
          <Route path="/" element={<Login/>} />
            <Route path="/sign-up" element={<Registration/>} />
           
          </Routes>
       </div></div>
       
    </div>
   
    <br></br>
         <br></br>
    </div>
  }
}
export default App;
