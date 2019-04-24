import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getFestivals, storeCurrentFestivalId } from '@helpers/OrbitalStation';

import './Festivals.scss';

type DispatchProps = {
  getFestivals: (token: string) => void;
  storeCurrentFestivalId: (id: string) => void;
};

type StateProps = {
  token: string;
  festivals: any;
};

type FestivalsProps = DispatchProps & StateProps;

class FestivalsClass extends Component<FestivalsProps, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getFestivals, token } = this.props;
    if (token) {
      getFestivals(token);
    }
  }

  goToFestival = (id: string) => {
    const { storeCurrentFestivalId } = this.props;
    storeCurrentFestivalId(id);
  };

  render() {
    const { festivals, token } = this.props;
    if (!token) {
      return <Redirect to="/" />;
    }

    if (!festivals) {
      return (
        <div className={'AppLoader'}>
          <Loader type="Bars" color="#FFFFFF" width={50} height={50} />
        </div>
      );
    }

    return (
      <div className={'festivalsContainer'}>
        <div className={'titleContainer'}>
          <h1 className={'title'}>Festivals</h1>
        </div>
        <div className={'festival-list'}>
          {festivals.map(festival => {
            return (
              <Link key={festival.name} to={`/festivals/${festival.id}`} onClick={() => this.goToFestival(festival.id)}>
                <div className={'festival-list-item'}>
                  <p className={'festival-item-name has-text-weight-semibold is-size-5-mobile'} key={festival.name}>
                    {festival.name}
                  </p>
                </div>
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
  storeCurrentFestivalId: (id: string) => dispatch(storeCurrentFestivalId(id)),
});

export const Festivals = connect(
  mapStateToProps,
  mapDispatchToProps
)(FestivalsClass);
