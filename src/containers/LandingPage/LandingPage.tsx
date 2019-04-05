import React, { Component, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { OrbitalStation } from '@helpers/OrbitalStation';

import './LandingPage.scss';

export type LoginState = {
  username: string;
  password: string;
};

export class LandingPage extends Component<any, LoginState> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {}

  loginHandler = () => {
    const { username, password } = this.state;
    OrbitalStation.login(username, password);
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
    return (
      <div className={'landingPage'}>
        <h1 className={'title'}>Festival Planner</h1>
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
        <button className={'button is-black'} onClick={this.loginHandler}>
          Login
        </button>
      </div>
    );
  }
}
