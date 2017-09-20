import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VoteBoard extends Component {

  static PropTypes = {
    home: PropTypes.object.isRequired,
    away: PropTypes.object.isRequired,
    onVote: PropTypes.func
  }

  render() {
    let home = this.props.home;
    let away = this.props.away;
    return (
      <form className="btn-group row-eq-height" data-toggle="buttons" role="group">
        <label style={{width: '40%'}} className="btn btn-success btn-lg">
        <div className="col-xs-6 col-md-3" style={{height: '100%'}}>
          <a href="#" className="thumbnail">
            <img className="img-responsive" src={home.logo} alt="logo" />
          </a>
        </div>
          <input type="radio" name="vote" value="w"/><p className="">{home.name} </p>
        </label>

        <label style={{width: '20%', height: '100%'}} className="btn btn-warning btn-lg ">
          <input type="radio" name="vote" value="d"/>Draw
        </label>

        <label style={{width: '40%'}} className="btn btn-success btn-lg">
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img className="img-responsive" src={away.logo} alt="logo" />
            </a>
          </div>
          <input type="radio" name="vote" value="l"/><p className="">{away.name} </p>
        </label>
      </form>
    );
  }
}

export default VoteBoard;