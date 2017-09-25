import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './../common/Panel.js'
import DateTimeField from 'react-datetime';
import moment from 'moment';

class AddMatchPane extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let matchs = this.loadLeagueData(1);
    let state = {
      matchs: matchs,
      selectedMatch: 0
    }
    this.setState(state);
  }

  loadLeagueData = (leagueId) => {
    let matchs = [
      {
        id : 1,
        round: 1,
        home : "AC Milan",
        away : "Juventus",
        startTime: new Date()
      },
      {
        id : 2,
        round: 2,
        home : "Fiorentina",
        away : "AC Milan",
        startTime: new Date()
      }
    ]
    return matchs;
  }

  selectLeague = (leagueId) => {
    this.loadLeagueData(leagueId);
  }

  selectRound = (roundId) => {
    this.setState({
      selectedMatch: roundId
    })
  }

  render() {


    let leagues = this.props.leagues;
    let selectedMatch = this.state.selectedMatch;
    let name, description;

    let leaguesOptions = leagues.map((league) => {
      return <option key={league.id} value={league.id} >{league.name}</option>
    });

    let matchs = [{
      id : 0,
      round: 0,
      home: '',
      away: '',
      startTime: new Date()
    },...this.state.matchs];

    let home, away, startTime;
    let roundSelectDisable = !(selectedMatch == 0);

    let roundOptions = matchs.map((match) => {
      let roundName;
      if (selectedMatch == match.round ) {
        home = match.home;
        away = match.away;
        startTime = match.startTime;
      }
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
            <select className="form-control" onChange={(event) => this.selectLeague(event.target.value)}>
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
            <select className="form-control" name="round" id="round" onChange={(event) => this.selectRound(event.target.value)}>
              {roundOptions}
            </select>
            <input type="text" disabled={roundSelectDisable} className='form-control' name="newRound" id="newRound"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="home" className="col-sm-2 control-label">Home</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="home" id="home" value={home}/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="home" className="col-sm-2 control-label">Away</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="away" id="away" value={away}/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="startTime" className="col-sm-2 control-label">Start Time</label>
          <div className="col-sm-10">
            <DateTimeField dateFormat="DD/MM/YYYY" defaultValue={new Date()} value={startTime}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="button" className="btn btn-primary">Update</button>
            <button type="button" className="btn btn-warning">Delete</button>
          </div>
        </div>
      </form>
    );

    return (
      <Panel content={content} title="Add Match" />
    );
  }
}

export default AddMatchPane;