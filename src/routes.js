import React, { Fragment } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Other from './pages/Other';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/other" component={Other} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
