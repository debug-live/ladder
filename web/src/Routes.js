import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import BuildStatus from './BuildStatus';
import About from "./About";
import Customer from "./Customer";

export default () => (
  <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/customer/:id' component={Customer}/>
      <Route path='/build-status' component={BuildStatus}/>
      <Route path='/about' component={About}/>
  </Switch>
);