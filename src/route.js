import React from 'react';

import {UpdateUser, Users} from './components/users'

import { Switch, Route} from 'react-router-dom';

export const ParentRoute = () => (
  <Switch>
    <Route exact path="/" component={Users} ></Route>
    <Route exact path="/user/add" component={UpdateUser}></Route>
    <Route exact path="/user/:userId" component={UpdateUser}></Route>
  </Switch>
)