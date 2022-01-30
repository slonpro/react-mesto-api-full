import React from "react";
import { Route, Redirect } from "react-router-dom";
import { TailSpin } from "react-loader-spinner"

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() => {
        if (props.loginIn === null) {
          return <div className="loader"><TailSpin color="#ffffff" height={80} width={80} /></div>
        }
        if (props.loginIn === true) {
          return <Component {...props} />
        } else {
          return <Redirect to="/sign-in" />
        }
        
      }
      }
    </Route>
  );
};

export default ProtectedRoute; 