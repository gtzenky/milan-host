import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchVotePane from './app/match-vote/MatchVotePane.js'

class MainPane extends Component {


  render() {
    return (
      <div className="content"> 
        <div>
          <MatchVotePane />
        </div>
      </div>
    );
  }
}

export default MainPane;
