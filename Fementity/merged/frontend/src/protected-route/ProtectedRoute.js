import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoute = ({ children }) => {
  let { user } = useUserAuth();
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
