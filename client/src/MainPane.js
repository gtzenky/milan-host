import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchVotePane from './app/match-vote/MatchVotePane.js'
import LeagueScreen from './app/add-league/LeagueScreen.js'
import Header from './Header.js'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

class MainPane extends Component {

  static PropTypes = {
    user: PropTypes.object.isRequired
  }

  componentWillMount() {
  }
  
  render() {
    let user = this.props.user;
    return (
    <div>
      <Header user={user} />
      <div className="container-fluid"> 
        <div className="content"> 
          <div>
              <Route exact path="/main" component={MatchVotePane} />
              <Route path="/main/league" component={LeagueScreen} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default MainPane;
