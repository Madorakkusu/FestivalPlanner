import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginPage } from '../LoginPage';

import './App.scss';

export class App extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app" className="app">
        <BrowserRouter>
          <Switch>
            <Route component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
