import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFestivals } from '@helpers/OrbitalStation';

import './Festivals.scss';

type DispatchProps = {
  getFestivals: (token: string) => void;
};

type StateProps = {
  token: string;
};

type FestivalProps = DispatchProps & StateProps;

class FestivalsClass extends Component<FestivalProps, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getFestivals, token } = this.props;
    getFestivals(token);
  }

  render() {
    return <h1>Festivals</h1>;
  }
}

const mapStateToProps = (state: any) => ({
  token: state.loginPage.token,
});

const mapDispatchToProps = (dispatch: any) => ({
  getFestivals: (token: string) => dispatch(getFestivals(token)),
});

export const Festivals = connect(
  mapStateToProps,
  mapDispatchToProps
)(FestivalsClass);
