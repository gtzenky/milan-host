import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPane from './MainPane.js'
import {Route, Redirect} from 'react-router-dom'
import LoginScreen from './app/login/LoginScreen.js'

class App extends Component {


  state = {
    isLogged : false
  }

  login = () => {
    const fetchOptions = {
      credentials: 'include'
    };
    fetch(`/api/me?_=${new Date().getTime()}`, fetchOptions).then((response) => {
      if (response.status === 200) {
        console.log(response.json());
        return <MainPane />
      } else {
        return <Redirect to={{pathname: '/login'}}/>
      }
    }, () => <Redirect to={{pathname: '/login'}}/>);
  }

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
        <Route path="/login" component={LoginScreen} />
        <Route path="/" render={this.login} />
      </div>
    );
  }
}

export default App;
