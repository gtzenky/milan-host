import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchVotePane from './app/match-vote/MatchVotePane.js'
import LeagueScreen from './app/add-league/LeagueScreen.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class MainPane extends Component {


  
  render() {
    return (
      <div className="content"> 
        <div>
            <Route exact path="/main/vote" component={MatchVotePane} />
            <Route path="/add-league" component={LeagueScreen} />
        </div>
      </div>
    );
  }
}

export default MainPane;
