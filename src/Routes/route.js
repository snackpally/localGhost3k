import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loginForm from '../components/login/loginForm';
import Landing from '../components/Landing/landing';

export default () => (
  <Switch>
    <Route path="/Login" exact component={loginForm} />
    <Route path="/" exact component={Landing} />
  </Switch>
);
