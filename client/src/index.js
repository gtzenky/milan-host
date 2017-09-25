import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-datetime/css/react-datetime.css'
// import 'bootstrap/dist/css/bootstrap-theme.css';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
