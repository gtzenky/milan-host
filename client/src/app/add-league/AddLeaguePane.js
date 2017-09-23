import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './../common/Panel.js'

class AddLeaguePane extends Component {

  static PropTypes = {
    leagues: PropTypes.array
  }

  constructor(props) {
    super(props);
    this.submitVote = this.submitVote.bind(this);
  }

  componentWillMount() {
    let state = {
      selectLeague: -1
    }
    this.setState(state);
  }

  selectLeague = (event) => {
    this.setState({selectLeague: event.target.value});
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

    var leagues = [{
      id: -1,
      name: "New League",
      description: "",
    } , ...this.props.leagues];

    let name, description;

    let selectLeague = this.state.selectLeague
    let leaguesOptions = leagues.map((league) => {
      if (selectLeague != -1 && selectLeague == league.id) {
        name = league.name;
        description = league.description;
      } else if (selectLeague == -1) {
        name= "";
        description = "";
      }
      return <option key={league.id} value={league.id} >{league.name}</option>
    });


    let content = (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="league" className="col-sm-2 control-label">League</label>
          <div className="col-sm-10">
            <select className="form-control" value={this.state.selectLeague} onChange={this.selectLeague}>
              {leaguesOptions}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name" className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" value={name} placeholder="League Name"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea rows="4" className="form-control" id="description" value={description} placeholder="Description"/>
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
      <Panel content={content} title="Add League" />
    );
  }
}

export default AddLeaguePane;