import React, { Component } from 'react';
import { connect } from 'react-redux';

class FestivalContainer extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Festival</h1>;
  }
}

export const Festival = connect(
  null,
  {}
)(FestivalContainer);
