import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery'
window.jQuery = $
window.$ = $

require('bootstrap');

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = () => {
  window.FB.init({
    "appId"      : '1525174080892930',
    "xfbml"      : true,
    "status"     : true,
    "cookie"     : true,
    "version"    : `v2.10`
  });
  window.FB.AppEvents.logPageView();
  ReactDOM.render(<App />, document.getElementById('root'));
};


registerServiceWorker();
