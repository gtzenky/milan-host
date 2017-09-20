import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoteBoard from './VoteBoard.js'

class MatchVotePane extends Component {

  constructor(props) {
    super(props);
    this.vote = this.vote.bind(this);
  }

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
      },
      vote: null
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
      vote: null
    })
  }

  render() {
    let home = this.state.home;
    let away = this.state.away;
    let vote = this.state.vote;
    let submitBoard = null;
    if (vote != null) {
      let result;
      if (vote == 0) {
        result = "Draw";
      } else if (vote == home.id) {
        result = home.name;
      } else if (vote == away.id) {
        result = away.name;
      }
      submitBoard = <p> {result} </p>;
    }
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Dự Đoán kết quả</h3>
        </div>
        <div className="panel-body">
          <VoteBoard home={home} away={away} onVote={this.vote} />
        </div>
          {submitBoard}
          <button type="button" className="btn btn-primary" disabled={vote == null} >Update</button>
          <button type="button" className="btn btn-defaut" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default MatchVotePane;