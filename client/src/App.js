import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPane from './MainPane.js'
import {Route, Redirect} from 'react-router-dom'
import LoginScreen from './app/login/LoginScreen.js'

class App extends Component {


  render() {
    return (
      <div>
        <Route path="/" component={LoginScreen} />
      </div>
    );
  }
}

export default App;
