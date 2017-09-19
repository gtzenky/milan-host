import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchVote from './components/MatchVote.js'

class MainPane extends Component {


  render() {
    return (
      <div className="content"> 
        <div>
          <MatchVote />
        </div>
      </div>
    );
  }
}

export default MainPane;
