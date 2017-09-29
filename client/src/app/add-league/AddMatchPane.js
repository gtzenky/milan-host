import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './../common/Panel.js'
import DateTimeField from 'react-datetime';
import moment from 'moment';
import HttpUtils from './../HttpUtils.js';
import $ from 'jquery';

class AddMatchPane extends Component {

  static PropTypes = {
    leagues: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.state = {
      leagueId: 0,
      matchId: 0,
      matchs: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  loadLeagueData = (leagueId) => {
    return HttpUtils.fetch(`/api/league/match?leagueId=${leagueId}`)
      .then(response => response.json());
  }

  selectLeague = (leagueId) => {
    this.loadLeagueData(leagueId)
      .then(matchs => {
        this.setState({
          matchs: matchs,
          leagueId: leagueId,
          matchId: 0,
          away: '',
          home: '',
          round: '',
        });
      })
  }

  selectRound = (matchId) => {
    let state = this.state;
    let match = {
      matchId: matchId,
      away: '',
      home: '',
      round: '',
      leagueId: state.leagueId,
      startTime: new Date(),
      matchResult: ''
    }
    let selectMatch = this.state.matchs.find(match => match.id == matchId);
    if (selectMatch) {
      let {away, home, round, startTime, matchResult} = selectMatch;
      match.away = away;
      match.home = home;
      match.round = round;
      match.startTime = startTime;
      match.matchResult = matchResult;
    }
    this.setState(match)
  }

  updateMatch = () => {
    let state = this.state;
    let match = {
      id: state.matchId,
      away: state.away,
      home: state.home,
      round: state.round,
      leagueId: state.leagueId,
      matchResult: state.matchResult,
      startTime: state.startTime
    }

    HttpUtils.fetch('/api/league/match', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(match)
    })
  }

  render() {

    let state = this.state;
    let leagues = this.props.leagues;
    let description;

    let leaguesOptions = leagues.map((league) => {
      if (league.id == state.leagueId) description= league.description;
      return <option key={league.id} value={league.id} >{league.name}</option>
    });

    let matchs = [{
      id : 0,
      round: 0,
      home: '',
      away: '',
      startTime: new Date()
    },...this.state.matchs];


    let roundOptions = matchs.map((match) => {
      let roundName;
      if (match.round === 0) {
        roundName = 'New Round';
      } else {
        roundName = match.round;
      }
      return <option key={match.round} value={match.id} >{roundName}</option> 
    })



    var content = (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="league" className="col-sm-2 control-label">League</label>
          <div className="col-sm-10">
            <select className="form-control" id="select-league" onChange={(event) => this.selectLeague(event.target.value)}>
              <option key={0} value={0} >Select League</option> 
              {leaguesOptions}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <p className="form-control-static">{description}</p>
          </div>
        </div>

        <div className="form-inline form-group">
          <label htmlFor="round" className="col-sm-2 control-label">Round</label>
          <div className="col-sm-10">
            <select className="form-control" name="matchId" id="matchId" onChange={(event) => this.selectRound(event.target.value)}>
              {roundOptions}
            </select>
            <input type="text" className='form-control' value={state.round} name="round" id="round" onChange={this.handleInputChange}/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="home" className="col-sm-2 control-label">Home</label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleInputChange} className="form-control" name="home" id="home" value={state.home}/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="home" className="col-sm-2 control-label">Away</label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleInputChange} className="form-control" name="away" id="away" value={state.away}/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="startTime" className="col-sm-2 control-label">Start Time</label>
          <div className="col-sm-10">
            <DateTimeField dateFormat="DD/MM/YYYY" name="startTime" value={new Date(state.startTime)} 
            onChange={date => {this.setState({startTime: date.toISOString()})}}/>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="matchResult" className="col-sm-2 control-label">Match Result</label>
          <div className="col-sm-10">
            <select className="form-control" value={state.matchResult} name="matchResult" id="matchResult" onChange={this.handleInputChange}>
              <option key="" value=""></option>
              <option key={-1} value={-1}>{state.home}</option> 
              <option key={0} value={0}>Draw</option>
              <option key={1} value={1}>{state.away}</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="button" className="btn btn-primary" disabled={state.leagueId == 0} onClick={this.updateMatch}>Update</button>
            <button type="button" className="btn btn-warning">Delete</button>
          </div>
        </div>
      </form>
    );

    $('#matchResult').val(state.matchResult);
    return (
      <Panel content={content} title="Add Match" />
    );
  }
}

export default AddMatchPane;