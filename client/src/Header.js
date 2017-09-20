import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';


class Header extends Component {

  componentWillMount() {
    this.props = {
      user: {
        displayName: "Nguyen Thong",
        isAdmin: true,
        picture: "https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-1/p24x24/18423721_10212392794071401_8730371000935577381_n.jpg?oh=c582d4c17199192e84d43c5446afe18f&oe=5A4B2920"
      }
    };
  }

  render() {
    var user = this.props.user;
    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img alt="Image Logo" height="30px" src={logo} />
          </a>
        </div>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Point <span className="badge">42</span></a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <img src={user.picture}/> {user.displayName} <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
      </div>
    </nav>
  )}
}

export default Header