import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-datetime/css/react-datetime.css'
// import 'bootstrap/dist/css/bootstrap-theme.css';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

require('bootstrap');

ReactDOM.render(
<Router>
  <App />
</Router>
, document.getElementById('root'));
// registerServiceWorker();
