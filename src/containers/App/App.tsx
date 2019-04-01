import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

export class App extends Component<any, any> {
 constructor(props) {
    super(props);
 }

 render() {
  return <h1>Bienvenue sur l'application Festival Planner</h1>;
 }
}