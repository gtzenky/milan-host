// @flow
import React from 'react';
import PropTypes from 'prop-types';

const getIsMobile = () => {
  let isMobile = false;

  try {
    isMobile = !!((window.navigator && window.navigator.standalone) || navigator.userAgent.match('CriOS') || navigator.userAgent.match(/mobile/i));
  } catch (ex) {
    // continue regardless of error
  }

  return isMobile;
};

// https://www.w3.org/TR/html5/disabled-elements.html#disabled-elements
const _shouldAddDisabledProp = (tag) => [
  'button',
  'input',
  'select',
  'textarea',
  'optgroup',
  'option',
  'fieldset',
].indexOf((tag + '').toLowerCase()) >= 0;

class FacebookLogin extends React.Component {

  static propTypes = {
    isDisabled: PropTypes.bool,
    callback: PropTypes.func,
    appId: PropTypes.string.isRequired,
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
    isMobile: getIsMobile(),
    tag: 'button',
    onFailure: null,
  };

  state = {
    isSdkLoaded: false,
    isProcessing: false,
  };

  componentDidMount() {
    this._isMounted = true;
    if (document.getElementById('facebook-jssdk')) {
      this.sdkLoaded();
      return;
    }
    this.setFbAsyncInit();
    this.loadSdkAsynchronously();
    let fbRoot = document.getElementById('fb-root');
    if (!fbRoot) {
      fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.appendChild(fbRoot);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setStateIfMounted(state) {
    if (this._isMounted) {
      this.setState(state);
    }
  }

  setFbAsyncInit() {
    const { appId, xfbml, cookie, version, autoLoad } = this.props;
    window.fbAsyncInit = () => {
      window.FB.init({
        "appId"      : appId,
        "xfbml"      : true,
        "status"     : true,
        "cookie"     : true,
        "version"    : `v${version}`
      });
      window.FB.AppEvents.logPageView();
      this.setStateIfMounted({ isSdkLoaded: true });
      window.FB.getLoginStatus(this.checkLoginAfterRefresh);
    };

  }

  sdkLoaded() {
    this.setState({ isSdkLoaded: true });
  }

  loadSdkAsynchronously() {
    const { language } = this.props;
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = `https://connect.facebook.net/${language}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  responseApi = (authResponse) => {
    window.FB.api('/me', { locale: this.props.language, fields: this.props.fields }, (me) => {
      Object.assign(me, authResponse);
      this.props.callback(me);
    });
  };

  checkLoginState = (response) => {
    this.setStateIfMounted({ isProcessing: false });
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
      window.FB.login(loginResponse => this.checkLoginState(loginResponse), true);
    }
  };

  // [AdGo] 20.11.2016 - coult not get container class to work
  containerStyle() {
    const style = { transition: 'opacity 0.5s' };
    if (this.state.isProcessing || !this.state.isSdkLoaded || this.props.isDisabled) {
      style.opacity = 0.6;
    }
    return Object.assign(style, this.props.containerStyle);
  }

  render() {
    // const { cssClass, size, icon, textButton, typeButton, buttonStyle } = this.props;
    // const optionalProps = {};
    // if (this.props.isDisabled && _shouldAddDisabledProp(this.props.tag)) {
    //   optionalProps.disabled = true;
    // }
    return (
      <div className="fb-login-button" 
      data-max-rows="1" 
      data-size="Large" 
      data-button-type="login_with" 
      data-show-faces="false" 
      data-auto-logout-link="true" 
      data-width="100px"
      data-scope="public_profile,email"
      data-use-continue-as="true">
      </div>
    );
  }
}

export default FacebookLogin;