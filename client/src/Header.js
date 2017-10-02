import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class Header extends Component {

  render() {
    var user = this.props.user;
    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img alt="Image Logo" src={logo} height="30px" />
          </a>
        </div>

      
        <ul className="nav navbar-nav">
          <li><Link to="/main">Home</Link></li>
          <li><Link to="/main/league">League</Link></li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          {/* <li><a href="#">Point <span className="badge">42</span></a></li> */}
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <img src={user.picture} style={{height: '30px', width: '30px' }}/> {user.fullName} <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              {/* <li><a href="#">Action</a></li> */}
              <li role="separator" className="divider"></li>
              <li><a href="/auth/logout">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )}
}

export default Header