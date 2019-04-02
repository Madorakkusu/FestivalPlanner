import React, { Component, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { OrbitalStation } from '@helpers/OrbitalStation';

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
      <>
        <input name={'username'} onChange={this.usernameHandler} />
        <input name={'password'} onChange={this.passwordHandler} />
        <button onClick={this.loginHandler}>Login</button>
      </>
    );
  }
}
