import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const token = useSelector((state) => state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) => (token ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
