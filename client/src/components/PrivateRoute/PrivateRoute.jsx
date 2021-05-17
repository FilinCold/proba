import React from "react";
import {Route} from "react-router/modules";
import {Redirect} from "react-router";

const PrivateRoute = ({ component: Component, checkSignIn, ...rest }) => (
  <Route {...rest} render={(props) => (
    checkSignIn === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default PrivateRoute