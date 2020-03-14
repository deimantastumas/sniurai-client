import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';
import Home from './containers/Home';
import Login from './containers/Login';
import NewNote from './containers/NewNote';
import Notes from './containers/Notes';
import NotFound from './containers/NotFound';
import Signup from './containers/Signup';
import Settings from './containers/Settings';

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
      <AppliedRoute
        path="/signup"
        exact
        component={Signup}
        appProps={appProps}
      />
      <AppliedRoute
        path="/notes/new"
        exact
        component={NewNote}
        appProps={appProps}
      />
      <AppliedRoute
        path="/notes/:id"
        exact
        component={Notes}
        appProps={appProps}
      />
      <AppliedRoute
        path="/settings"
        exact
        component={Settings}
        appProps={appProps}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
