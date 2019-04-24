import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from '@modules/LoginPage';
import { Festivals } from '@modules/Festivals';
import { Festival } from '@modules/Festival';

import './App.scss';

export class App extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app" className="app">
        <Router>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/festivals/" component={Festivals} />
          <Route exact path="/festivals/:id/" component={Festival} />
        </Router>
      </div>
    );
  }
}
