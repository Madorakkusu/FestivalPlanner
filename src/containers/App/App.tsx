import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from '@modules/LoginPage';
import { Festivals } from '@modules/Festivals';

import './App.scss';

export class App extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app" className="app">
        <Router>
          <Route path="/" component={LoginPage} />
          <Route path="/festivals/" component={Festivals} />
        </Router>
      </div>
    );
  }
}
