import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from './facebook/facebook-login.js'

class App extends Component {
  state = {users: []}
  
  componentDidMount() {

    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <FacebookLogin appId='1525174080892930' />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}

        <h2>Butn</h2>
      </div>
    );
  }
}

export default App;
