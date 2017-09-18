import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
      </div>
    );
  }
}

export default App;
