import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchVotePane from './app/match-vote/MatchVotePane.js'
import LeagueScreen from './app/add-league/LeagueScreen.js'

class MainPane extends Component {


  render() {
    return (
      <div className="content"> 
        <div>
          <LeagueScreen />
        </div>
      </div>
    );
  }
}

export default MainPane;
