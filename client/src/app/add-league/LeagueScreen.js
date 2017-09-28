import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './../common/Panel.js'
import AddLeaguePane from './AddLeaguePane.js'
import AddMatchPane from './AddMatchPane.js'
import HttpUtils from './../HttpUtils.js'

class LeagueScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leagues: []
    }
  }


  componentWillMount() {
    this.loadLeagues();
  }

  loadLeagues = () => {
    HttpUtils.fetch('/api/league')
    .then(response => response.json())
    .then(json => {
      let state = {leagues: json};
      this.setState(state);
    })
    .catch(error => console.log(error.statusText));
  }

  render() {

    let leagues = this.state.leagues;

    return (
      <div>
        <AddLeaguePane leagues={leagues} onSubmitCallback={this.loadLeagues} />
        <AddMatchPane leagues={leagues} />
      </div>
    );
  }
}

export default LeagueScreen;