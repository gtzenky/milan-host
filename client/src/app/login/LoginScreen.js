import React, { Component } from 'react';
import MainPane from './../../MainPane.js'
import {Route, Redirect} from 'react-router-dom'

class LoginScreen extends Component {


  state = {
    isLogged : false,
    pending: true
  }

  login = () => {
    const fetchOptions = {
      credentials: 'include'
    };
    fetch(`/api/me?_=${new Date().getTime()}`, fetchOptions).then((response) => {
      if (response.status === 200) {
        this.setState({
          isLogged: true,
          pending: false
        })
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
      return (
        <div>
          <Redirect to="/main" />
          <Route path="/main" component={MainPane} />
        </div>  
      );
    }

    return (
      <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
    );
  }
}

export default LoginScreen;