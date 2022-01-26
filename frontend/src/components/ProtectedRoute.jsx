import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loginIn ? <Component {...props} /> : <Redirect to="/sign-up" />
      }
    </Route>
  );
};

export default ProtectedRoute; 