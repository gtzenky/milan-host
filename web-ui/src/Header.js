import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from './login/FacebookLogin.js'
import UserInfo from './login/UserInfo.js'

class Header extends Component {
  
  constructor(props) {
    super(props);
  }


  componentDidMount() {
  }

  render() {

    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img alt="Image Logo" height="50px" src={logo}/>
          </a>
        </div>
        
        <div className="navbar-right">
          <FacebookLogin/>
        </div>
      </div>
    </nav>
    );
  }
}

export default Header;

