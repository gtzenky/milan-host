import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import MainPane from './MainPane.js'

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
        <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
        <MainPane />
        </div>
      </div>
    );
  }
}

export default App;
