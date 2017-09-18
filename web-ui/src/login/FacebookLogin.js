// @flow
import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo.js'


class FacebookLogin extends React.Component {

  static propTypes = {
    xfbml: PropTypes.bool,
    cookie: PropTypes.bool,
    reAuthenticate: PropTypes.bool,
    scope: PropTypes.string,
    redirectUri: PropTypes.string,
    textButton: PropTypes.string,
    typeButton: PropTypes.string,
    autoLoad: PropTypes.bool,
    disableMobileRedirect: PropTypes.bool,
    isMobile: PropTypes.bool,
    size: PropTypes.string,
    fields: PropTypes.string,
    cssClass: PropTypes.string,
    version: PropTypes.string,
    icon: PropTypes.any,
    language: PropTypes.string,
    onClick: PropTypes.func,
    containerStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
    tag: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    onFailure: PropTypes.func,
  };

  static defaultProps = {
    textButton: 'Login with Facebook',
    typeButton: 'button',
    redirectUri: typeof window !== 'undefined' ? window.location.href : '/',
    scope: 'public_profile,email',
    xfbml: false,
    cookie: false,
    reAuthenticate: false,
    size: 'metro',
    fields: 'name,email,link,picture',
    cssClass: 'kep-login-facebook',
    version: '2.10',
    language: 'en_US',
    disableMobileRedirect: false,
    tag: 'button',
    onFailure: null,
  };

  state = {
    isLogin: false,
    userInfo: {}
  };

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    window.FB.getLoginStatus(this.checkLoginAfterRefresh);
  }

  componentWillUnmount() {
  }

  responseApi = (authResponse) => {
    window.FB.api('/me', { locale: this.props.language, fields: this.props.fields }, (me) => {
      Object.assign(me, authResponse);
      this.setState({isLogin: true, userInfo: me});
    });
  };

  checkLoginState = (response) => {
    if (response.authResponse) {
      this.responseApi(response);
    } else {
      if (this.props.onFailure) {
        this.props.onFailure({ status: response.status });
      } else {
        this.props.callback({ status: response.status });
      }
    }
  };

  checkLoginAfterRefresh = (response) => {
    if (response.status === 'connected') {
      this.checkLoginState(response);
    } else {
      // window.FB.login(loginResponse => this.checkLoginState(loginResponse), true);
      this.setState({isLogin: false, userInfo: {}});
    }
  };

  login = () => {
    let scope = this.props.scope;
    window.FB.login((response) => {
      window.location.reload()
    }, {
      scope: scope, 
    })
  }

  render() {
    var btn = <button type="button" className="btn btn-primary" onClick={this.login}>Login</button>;
    if (this.state.isLogin) {
      var user = this.state.userInfo;
      btn = <UserInfo name={user.name} email={user.email} avatar={user.picture.data.url} />;
    }
    return (
      <div>
        {btn}
      </div>
    );
  }
}

export default FacebookLogin;