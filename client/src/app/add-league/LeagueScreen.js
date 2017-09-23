import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './../common/Panel.js'
import AddLeaguePane from './AddLeaguePane.js'
import AddMatchPane from './AddMatchPane.js'

class LeagueScreen extends Component {

  constructor(props) {
    super(props);
    this.vote = this.vote.bind(this);
    this.submitVote = this.submitVote.bind(this);
  }

  componentWillMount() {
    let state = {
      leagues: [{
        id:1,
        name: "serie A",
        description: "2016-2017"
      },
      {
        id:2,
        name: "Premier",
        description: "2017-2018"
      }]
    }
    this.setState(state);
  }

  vote = (value) => {
    this.setState({
      vote: value
    })
  }

  reset = () => {
    this.setState({
      vote: this.state.selectedVote
    })
  }

  submitVote = () => {
    fetch("submit", {
      method: "POST",
      body: JSON.stringify({
        matchId: this.state.matchId,
        vote: this.state.vote
      })
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error)
    })
  }

  render() {

    return (
      <div>
        <AddLeaguePane leagues={this.state.leagues} />
        <AddMatchPane leagues={this.state.leagues} />
      </div>
    );
  }
}

export default LeagueScreen;