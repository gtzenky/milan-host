import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import MainPane from './MainPane.js'
import {Route} from 'react-router-dom'
import LoginScreen from './app/login/LoginScreen.js'

class App extends Component {
  render() {
    const fetchOptions = {
      credentials: 'include'
    };
    fetch(`/api/me?_=${new Date().getTime()}`, fetchOptions).then(function(response) {
      if (response.status === 200) {
        console.log(response.json());
      }
    });
    return (
      <div>
        <Header />
        <div className="container-fluid"> 
        <Route path="/login" component={LoginScreen} />
        <Route path="/main" component={MainPane} />
        </div>
      </div>
    );
  }
}

export default App;
