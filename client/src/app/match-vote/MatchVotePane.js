import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoteBoard from './VoteBoard.js'

class MatchVotePane extends Component {


  componentWillMount() {
    let state = {
      home: {
        id: 1,
        name: "AC Milan",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-V07amgpuoklt_aTDEyepDF5cRC_8G1LKj-x-M-PeK-RJhlBJQw"
      },
      away: {
        id: 2,
        name: "Juventus",
        logo: "https://pre09.deviantart.net/b58c/th/pre/i/2011/268/f/5/juventus_fc_psd_by_chicot101-d4aweqp.png"
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
          <VoteBoard home={home} away={away} />
        </div>
      </div>
    );
  }
}

export default MatchVotePane;