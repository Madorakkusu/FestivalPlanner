import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFestivals } from '@helpers/OrbitalStation';

import './Festivals.scss';

type DispatchProps = {
  getFestivals: (token: string) => void;
};

type StateProps = {
  token: string;
  festivals: any;
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
    const { festivals } = this.props;
    if (!festivals) return null;

    return (
      <div className={'festivalsContainer'}>
        <h1 className={'title'}>Festivals</h1>
        <div className={'festival-list'}>
          {festivals.map(festival => {
            return (
              <Link key={festival.name} to={`/festival/${festival.id}`}>
                <p className={'festival'} key={festival.name}>
                  {festival.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  token: state.loginPage.token,
  festivals: state.festivals.festivals,
});

const mapDispatchToProps = (dispatch: any) => ({
  getFestivals: (token: any) => dispatch(getFestivals(token)),
});

export const Festivals = connect(
  mapStateToProps,
  mapDispatchToProps
)(FestivalsClass);
