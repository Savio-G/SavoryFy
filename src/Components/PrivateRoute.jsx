import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    return children
  }
  return <Navigate to="/Login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;