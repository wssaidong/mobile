import React from 'react';
import {Router, Switch, Route} from 'dva/router';
import Dynamic from 'dva/dynamic';

function RouterConfig({
  history, app
}) {
  const Index = Dynamic({
    app,
    models: () => [
       import('./models/gain')
    ],
    component: () => import('./routes/index')
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
