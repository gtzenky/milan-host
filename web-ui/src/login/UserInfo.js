import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserInfo extends Component {

  static propTypes = {
    email: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string
  }

  logout = () => {
    window.FB.logout((response) => {
      window.location.reload();
    });
  }

  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.props.name} <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li role="separator" className="divider"></li>
          <li><a href="#" onClick={this.logout} >Logout</a></li>
        </ul>
      </div>
    );
  }
}

export default UserInfo
