import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import MainPane from './MainPane.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid text-center"> 
          <MainPane />
        </div>
      </div>
    );
  }
}

export default App;
