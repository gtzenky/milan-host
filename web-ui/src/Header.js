import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLogin from './login/FacebookLogin.js'
import UserInfo from './login/UserInfo.js'

class Header extends Component {
  
  state = {
    isLogin: false,
    userInfo: {}
  }

  constructor(props) {
    super(props);
    this.loginStatus = this.loginStatus.bind(this);
  }


  componentDidMount() {
  }

  loginStatus(response) {
    console.log(response);
    if (response.status === "connected") {
      this.setState({
        isLogin: true,
        userInfo: response
      });
    } else {
      this.setState({
        isLogin: false,
        userInfo: {}
      });
    }
  }

  render() {

    var userInfo = '';
    if (this.state.isLogin) {
      var user = this.state.userInfo;
      userInfo = <UserInfo name={user.name} email={user.email} avatar={user.picture.data.url} />;
    }
    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img alt="Image Logo" height="50px" src={logo}/>
          </a>
        </div>
        
        <div className="navbar-right">
          {userInfo}
          <FacebookLogin appId="1525174080892930" 
            callback={this.loginStatus}
          />
        </div>
      </div>
    </nav>
    );
  }
}

export default Header;

