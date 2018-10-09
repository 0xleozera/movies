import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../app/template/home';
import Details from '../app/template/details';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/details/:id' component={Details} />
  </Switch>
)

export default Routes;
