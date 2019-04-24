import React, { Component, FormEvent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '@helpers/OrbitalStation';

import './LoginPage.scss';

type LoginState = {
  username: string;
  password: string;
};

type StateProps = {
  token: string;
};

type DispatchProps = {
  login: (username: string, password: string) => void;
};

type LoginPageProps = DispatchProps & StateProps;

class LoginPageClass extends Component<LoginPageProps, LoginState> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  loginHandler = () => {
    const { username, password } = this.state;
    const { login } = this.props;
    login(username, password);
  };

  usernameHandler = (e: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    this.setState({ username: value });
  };

  passwordHandler = (e: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    this.setState({ password: value });
  };

  render() {
    const { token } = this.props;

    if (token) {
      return <Redirect to="/festivals" />;
    }

    return (
      <div className={'loginPage'}>
        <h1 className={'title is-size-2-mobile'}>Festival Planner</h1>
        <input
          className={'input is-medium'}
          name={'username'}
          placeholder={'Account'}
          onChange={this.usernameHandler}
        />
        <input
          className={'input is-medium'}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
          onChange={this.passwordHandler}
        />
        <button className={'loginPage-button button is-medium'} onClick={this.loginHandler}>
          Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any): StateProps => ({
  token: state.loginPage.token,
});

const mapDispatchToProps = (dispatch: any) => ({
  login: (username: string, password: string) => dispatch(login(username, password)),
});

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPageClass);
