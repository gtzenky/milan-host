import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './../common/Panel.js';
import HttpUtils from './../HttpUtils.js'

class AddLeaguePane extends Component {

  static PropTypes = {
    leagues: PropTypes.array,
    onSubmitCallback: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateLeague = this.updateLeague.bind(this);
    this.state = {
      selectLeague: -1,
      name: '',
      description: ''
    }
  }

  componentWillReceiveProps() {
    this.setState({
      selectLeague: -1,
      name: '',
      description: ''
    })
  }

  selectLeague = (event) => {
    let selectLeagueId = event.target.value;
    let name = ''; 
    let description = '';
    let selectLeague = this.props.leagues.find(league => league.id == selectLeagueId);
    if (selectLeague) {
      name = selectLeague.name;
      description = selectLeague.description;
    }
    this.setState({
      selectLeague: selectLeagueId,
      name: name,
      description: description
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  updateLeague = () => {
    let league = {
      id: this.state.selectLeague > 0 ? this.state.selectLeague : undefined,
      name: this.state.name,
      description: this.state.description
    };
    let callback = this.props.onSubmitCallback;
    HttpUtils.fetch("/api/league", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(league)
    }).then((response) => {
      if (callback) {
        callback(response);
      }
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


    let selectLeague = this.state.selectLeague
    let leaguesOptions = leagues.map((league) => {
      return <option key={league.id} value={league.id} >{league.name}</option>
    });


    let content = (
      <div className="form-horizontal" id="league-form">
        <div className="form-group">
          <label htmlFor="id" className="col-sm-2 control-label">League</label>
          <div className="col-sm-10">
            <select className="form-control" name="id" value={this.state.selectLeague} onChange={this.selectLeague}>
              {leaguesOptions}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name" className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onChange={this.handleInputChange} className="form-control" id="name" name="name" value={this.state.name} placeholder="League Name"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea onChange={this.handleInputChange} rows="4" className="form-control" id="description" name="description" value={this.state.description} placeholder="Description"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="button" className="btn btn-primary" onClick={() => this.updateLeague()}>Update</button>
            {/* <button type="button" className="btn btn-warning">Delete</button> */}
          </div>
        </div>
      </div>
    );

    return (
      <Panel content={content} title="Add League" />
    );
  }
}

export default AddLeaguePane;