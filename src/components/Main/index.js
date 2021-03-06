import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import Homepage from '../../containers/Homepage';
import Profile from '../../containers/Profile';
import NoAuthRoute from '../../containers/NoAuthRoute';
import ProtectedRoute from '../../containers/ProtectedRoute';
import Search from '../../containers/Search';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          {/* NoAuthRoutes only let you go to them if you haven't authenticated */}
          <NoAuthRoute exact path="/login" component={Login} />
          <NoAuthRoute exact path="/signup" component={Signup} />
          {/* ProtectedRoutes only let you go to them if you are authenticated */}
          <ProtectedRoute exact path="/" component={Homepage} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/search" component={Search} />
        </Switch>
      </div>
    );
  }
}
