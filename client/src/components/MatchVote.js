import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MatchVote extends Component {


  render() {
    return (
      <form className="123" data-toggle="buttons">
        <label style={{width: '40%'}} className="btn btn-success btn-lg">
          <input type="radio" name="op1" value="w"/>None
        </label>
        <label style={{width: '20%'}} className="btn btn-warning btn-lg">
          <input type="radio" name="op1" value="d"/>User
        </label>
        <label style={{width: '40%'}} className="btn btn-success btn-lg">
          <input type="radio" name="op1" value="l"/>Manager
        </label>
      </form>
    );
  }
}

export default MatchVote;