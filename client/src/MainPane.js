import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchVotePane from './app/match-vote/MatchVotePane.js'
import LeagueScreen from './app/add-league/LeagueScreen.js'
import Header from './Header.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class MainPane extends Component {


  componentWillMount() {
    // browserHistory.replace("/login")
  }
  
  render() {
    return (
    <div>
      <Header />
      <div className="container-fluid"> 
        <div className="content"> 
          <div>
              <Route exact path="/vote" component={MatchVotePane} />
              <Route path="/add-league" component={LeagueScreen} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default MainPane;
