import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface Props {
  path: string;
  isAuth: boolean;
  redirect: string;
  children: any;
}

const ProtectedRoute: React.FC<Props> = ({
  path,
  isAuth,
  redirect,
  children
}) => {
  return (
    <Route
      path={path}
      render={() =>
        isAuth ? children : <Redirect to={{ pathname: redirect }} />
      }
    />
  );
};

export default ProtectedRoute;
