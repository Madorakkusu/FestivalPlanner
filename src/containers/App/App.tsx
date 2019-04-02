import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { LandingPage } from '../LandingPage';

export class App extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app" className="app">
        <BrowserRouter>
          <Switch>
            <Route component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
