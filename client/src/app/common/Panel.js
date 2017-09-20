import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Panel extends Component {

  static PropTypes = {
    title: PropTypes.string,
    content: PropTypes.element
  }


  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">this.props.title</h3>
        </div>
        <div className="panel-body">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Panel;