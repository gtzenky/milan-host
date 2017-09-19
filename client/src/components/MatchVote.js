import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MatchVote extends Component {


  componentWillMount() {
    let state = {
      home: {
        name: "AC Milan",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-V07amgpuoklt_aTDEyepDF5cRC_8G1LKj-x-M-PeK-RJhlBJQw"
      },
      away: {
        name: "Juventus",
        logo: ""
      }
    }

    this.setState(state);
  }

  render() {
    let home = this.state.home;
    let away = this.state.away;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Dự Đoán kết quả</h3>
        </div>
        <div className="panel-body">
          <form className="btn-group row-eq-height" data-toggle="buttons" role="group">
            <label style={{width: '40%'}} className="btn btn-success btn-lg">
            <div className="col-xs-6 col-md-3" style={{height: '100%'}}>
              <a href="#" className="thumbnail">
                <img src={home.logo} alt="logo" />
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
                  <img src={away.logo} alt="logo" />
                </a>
              </div>
              <input type="radio" name="vote" value="l"/>{away.name}
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default MatchVote;