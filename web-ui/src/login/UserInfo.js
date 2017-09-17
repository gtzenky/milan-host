import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserInfo extends Component {

  static propTypes = {
    email: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default UserInfo
