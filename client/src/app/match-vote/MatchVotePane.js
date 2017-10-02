import React, { Component } from 'react';
import VoteBoard from './VoteBoard.js'
import Panel from './../common/Panel.js'
import HttpUtils from './../HttpUtils.js'

class MatchVotePane extends Component {

  constructor(props) {
    super(props);
    this.vote = this.vote.bind(this);
    this.submitVote = this.submitVote.bind(this);
    let state = {
      match: {},
      home: {},
      away: {},
      selectedVote: null,
      vote: null,
      matchId: null,
      startTime: new Date()
    }
    this.state = state;
  }

  componentWillMount() {

    HttpUtils.fetch('/api/vote')
      .then(response => response.json())
      .then(result => {
        let match = result.match;
        if (match) {
          let selectedVote = result.vote;
          let state = {
            match: match,
            home: {
              id: -1,
              name: match.home,
              logo: match.homeLogo
            },
            away: {
              id: 1,
              name: match.away,
              logo: match.awayLogo
            },
            selectedVote: selectedVote,
            vote: selectedVote,
            matchId: match.id,
            startTime: new Date(match.startTime)
          }
          this.setState(state);
        }
      })
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
    HttpUtils.fetch("/api/vote", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        matchId: this.state.matchId,
        voteResult: this.state.vote
      })
    }).then(response => response.json())
    .then((vote) => {
      this.setState({
        selectedVote: vote.voteResult
      })
    }, (error) => {
      console.log(error)
    })
  }

  render() {
    let match = this.state.match;
    let home = this.state.home;
    let away = this.state.away;
    let vote = this.state.vote;
    let startTime = this.state.startTime
    let submitBoard = null;
    let result, matchResult;
    if (vote != null) {
      if (vote == 0) {
        result = "Draw";
      } else if (vote == home.id) {
        result = home.name;
      } else if (vote == away.id) {
        result = away.name;
      }
    }
    
    if (match != null) {
      if (match.matchResult == 0) {
        matchResult = "Draw";
      } else if (match.matchResult == home.id) {
        matchResult = home.name;
      } else if (match.matchResult == away.id) {
        matchResult = away.name;
      }
    }
    submitBoard = <h4>Đang chọn: {result} <br/> Kết quả: {matchResult} </h4>;

    var content = (
      <div className="text-center">
        <h3>{match.round} {startTime.toLocaleString()}</h3>
        <VoteBoard home={home} away={away} onVote={this.vote} />
        {submitBoard}
        <button type="button" className="btn btn-primary" 
          disabled={vote == this.state.selectedVote || startTime.getTime() <= new Date().getTime() } 
          onClick={this.submitVote} >Update</button>
        <button type="button" className="btn btn-defaut" onClick={this.reset}>Reset</button>
      </div>
    );


    return (
      <Panel content={content} title="Dự Đoán kết quả" />
    );
  }
}

export default MatchVotePane;