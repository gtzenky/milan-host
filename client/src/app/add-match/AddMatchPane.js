import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './../common/Panel.js'

class AddMatchPane extends Component {

  constructor(props) {
    super(props);
    this.vote = this.vote.bind(this);
    this.submitVote = this.submitVote.bind(this);
  }

  componentWillMount() {
    let state = {
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

    var content = (
      <form className="form-horizontal">
        <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
          </div>
        </div>
        <div className="form-group">
          <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Sign in</button>
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