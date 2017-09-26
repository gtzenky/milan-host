import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchVotePane from './app/match-vote/MatchVotePane.js'
import LeagueScreen from './app/add-league/LeagueScreen.js'
import Header from './Header.js'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

class MainPane extends Component {


  componentWillMount() {
  }
  
  render() {

    return (
    <div>
      <Header />
      <div className="container-fluid"> 
        <div className="content"> 
          <div>
              <Route exact path="/main" component={MatchVotePane} />
              <Route path="/main/add-league" component={LeagueScreen} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default MainPane;
