import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomerList from "./CustomerList";
import BuildStatus from './BuildStatus';
import About from "./About";
import CustomerDetail from "./CustomerDetail";

export default () => (
  <Switch>
      <Route exact path='/' component={CustomerList}/>
      {/*<Route exact path='/customer' component={CustomerList}/>*/}
      <Route path='/customer/:id' component={CustomerDetail}/>
      <Route path='/build-status' component={BuildStatus}/>
      <Route path='/about' component={About}/>
  </Switch>
);