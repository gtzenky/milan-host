import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchVotePane from './app/match-vote/MatchVotePane.js'
import AddMatchPane from './app/add-match/AddMatchPane.js'

class MainPane extends Component {


  render() {
    return (
      <div className="content"> 
        <div>
          <AddMatchPane />
        </div>
      </div>
    );
  }
}

export default MainPane;
