import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from './facebook/facebook-login.js'

class Header extends Component {
  
  componentDidMount() {
  }

  render() {
    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img alt="Image Logo" height="50px" src=""/>
          </a>
        </div>
        
        <div className="navbar-right">
          <FacebookLogin appId="1525174080892930" />
        </div>
      </div>
    </nav>
    );
  }
}

export default Header;

