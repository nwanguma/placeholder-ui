import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      render={() => (isAuthenticated ? <Component /> : <Redirect to="/" />)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
