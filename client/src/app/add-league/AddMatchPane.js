import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './../common/Panel.js'
import DateTimeField from 'react-bootstrap-datetimepicker';

class AddMatchPane extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let matchs = this.loadLeagueData(1);
    let state = {
      matchs: matchs
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


    var leagues = this.props.leagues;

    let name, description;

    let leaguesOptions = leagues.map((league) => {
      return <option key={league.id} value={league.id} >{league.name}</option>
    });

    let matchs = this.state.matchs;

    let home, away;

    let roundOptions = matchs.map((match) => {
      if (this.state.selectedMatch == match.round ) {
        home = match.home;
        away = match.away;
      }
      return <option key={match.round} data-value value={match.round} >{match.round}</option> 
    })

    let selectedMatch = this.state.selectedMatch;


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

        <div className="form-group">
          <label htmlFor="round" className="col-sm-2 control-label">Round</label>
          <div className="col-sm-10">
            <select className="form-control" name="round" id="round" onChange={(event) => this.selectRound(event.target.value)}>
              {roundOptions}
            </select>
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
            <DateTimeField inputFormat="DD/MM/YY h:mm A" showToday={true} />
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