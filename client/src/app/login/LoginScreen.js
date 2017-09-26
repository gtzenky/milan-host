import React, { Component } from 'react';
import MainPane from './../../MainPane.js'
import {Route, Redirect, Switch} from 'react-router-dom'

class LoginScreen extends Component {


  state = {
    isLogged : false,
    pending: true,
    user: {}
  }

  login = () => {
    const fetchOptions = {
      credentials: 'include'
    };
    fetch(`/api/me?_=${new Date().getTime()}`, fetchOptions).then((response) => {
      if (response.status === 200) {
        response.json().then(user => {
          this.setState({
          isLogged: true,
          pending: false,
          user: user
        })});
      } else {
        this.setState({
          isLogged :false,
          pending: false
        })
      }
    }, () => {
      this.setState({
      isLogged :false,
      pending: false
    })});
    

    return  this.setState({
      pending: true
    });
  }

  componentWillMount() {
    this.login();
  }

  render() {

    if (this.state.pending) {
      return <div>Loading...</div>
    }

    if (this.state.isLogged) {
      let user = this.state.user;
      return (
        <Switch>
          <Route path="/main" render={() => <MainPane user={user}/> } />
          <Redirect to="/main" />
        </Switch>
      );
    }

    return (
      <div>
        <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
      </div>
    );
  }
}

export default LoginScreen;