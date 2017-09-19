import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchVote from './components/MatchVote.js'

class MainPane extends Component {


  render() {
    return (
      <div className="content"> 
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a>
        <div>
          <MatchVote />
        </div>
      </div>
    );
  }
}

export default MainPane;
