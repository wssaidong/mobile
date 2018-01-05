import React from 'react';
import {Router, Switch, Route} from 'dva/router';
import Dynamic from 'dva/dynamic';

function RouterConfig({
  history, app
}) {
  const Index = Dynamic({
    app,
    models: () => [
       import('./models/osc')
    ],
    component: () => import('./routes/index')
  });

  const Link = Dynamic({
    app,
    models: () => [
      import('./models/link')
    ],
    component: () => import('./routes/link')
  });

  const OscAuth = Dynamic({
    app,
    component: () => import('./routes/oscAuth')
  });
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Link} />
        <Route exact path="/index" component={Index} />
        <Route path="/recommend" component={Link} />
        <Route path="/osc/auth" component={OscAuth} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
