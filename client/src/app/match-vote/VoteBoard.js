import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VoteBoard extends Component {

  static PropTypes = {
    home: PropTypes.object.isRequired,
    away: PropTypes.object.isRequired,
    onVote: PropTypes.func
  }

  vote= (value) => {
    if (this.props.onVote) {
      this.props.onVote(value);
    }
  }

  render() {
    let home = this.props.home;
    let away = this.props.away;
    return (
      <div className="btn-group row-eq-height" data-toggle="buttons" role="group">
        <label style={{width: '40%'}} className="btn btn-success btn-lg" onClick={this.vote.bind(this, home.id)}>
        <div className="col-xs-6 col-md-3" style={{height: '100%'}}>
          <a href="#" className="thumbnail">
            <img className="img-responsive" src={home.logo} alt="logo" />
          </a>
        </div>
          <input type="radio" name="vote" value={home.id} /><p>{home.name} </p>
        </label>

        <label style={{width: '20%', height: '100%'}} className="btn btn-warning btn-lg" onClick={this.vote.bind(this, 0)}>
          <input type="radio" name="vote" value="0" />Draw
        </label>

        <label style={{width: '40%'}} className="btn btn-success btn-lg" onClick={this.vote.bind(this, away.id)}>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img className="img-responsive" src={away.logo} alt="logo" />
            </a>
          </div>
          <input type="radio" name="vote" value={away.id} /><p>{away.name} </p>
        </label>
      </div>
    );
  }
}

export default VoteBoard;