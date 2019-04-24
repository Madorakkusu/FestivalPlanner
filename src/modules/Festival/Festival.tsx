import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { getFestivalById, resetFestival } from '@helpers/OrbitalStation';

import './Festival.scss';

type DispatchProps = {
  getFestivalById: (id: string, token: any) => void;
  resetFestival: () => void;
};

type StateProps = {
  currentFestival: any;
  currentFestivalId: string;
  token: any;
};

type FestivalProps = DispatchProps & StateProps;

class FestivalContainer extends Component<FestivalProps, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { currentFestivalId, token, getFestivalById } = this.props;
    getFestivalById(currentFestivalId, token);
  }

  resetCurrentFestival = () => {
    const { resetFestival } = this.props;
    resetFestival();
  };

  render() {
    const { currentFestival } = this.props;
    if (!currentFestival) {
      return (
        <div className={'AppLoader'}>
          <Loader type="Bars" color="#FFFFFF" width={50} height={50} />
        </div>
      );
    }

    return (
      <div className={'festivalInfosContainer'}>
        <div className={'headerContainer'}>
          <div className={'headerActions'}>
            <Link to={'/festivals'}>
              <p onClick={this.resetCurrentFestival}>
                <i className="fas fa-angle-left has-text-white is-size-5-mobile" />
              </p>
            </Link>
            <button className={'button'}>Participer</button>
          </div>
          <h1 className={'title'}>{currentFestival.name}</h1>
        </div>
        <div className={'descriptionContainer'}>
          <h2 className={'title is-size-5-mobile has-text-grey-dark'}>Description</h2>
          <p className={'description has-text-grey-dark'}>{currentFestival.description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  token: state.loginPage.token,
  currentFestivalId: state.festivals.currentFestivalId,
  currentFestival: state.festival.current,
});

const mapDispatchToProps = (dispatch: any) => ({
  getFestivalById: (id: string, token: any) => dispatch(getFestivalById(id, token)),
  resetFestival: () => dispatch(resetFestival()),
});

export const Festival = connect(
  mapStateToProps,
  mapDispatchToProps
)(FestivalContainer);
