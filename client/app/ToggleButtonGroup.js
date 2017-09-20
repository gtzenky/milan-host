import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleButtonGroup extends Component {


  render() {
    return (
      <div className="" data-toggle="buttons">
        <label className="btn btn-default">
          <input type="radio" color="red" />None
        </label>
        <label className="btn btn-default">
          <input type="radio" />User
        </label>
        <label className="btn btn-default">
          <input type="radio" />Manager
        </label>
      </div>
    );
  }
}

export default ToggleButtonGroup;