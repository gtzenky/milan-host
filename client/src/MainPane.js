import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchVotePane from './app/match-vote/MatchVotePane.js'
import AddMatchPane from './app/add-match/AddMatchPane.js'
import AddLeaguePane from './app/add-league/AddLeaguePane.js'

class MainPane extends Component {


  render() {
    return (
      <div className="content"> 
        <div>
          <AddLeaguePane />
        </div>
      </div>
    );
  }
}

export default MainPane;
