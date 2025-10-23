import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../LoadingSpinner';

const PrivateRoute = ({children}) => {
     const {user,loading} = use(AuthContext)
    //  console.log(user);
    const location = useLocation();
    console.log(location);
    
     if(loading){
        return <LoadingSpinner></LoadingSpinner>
     }
     if(user){
        return children;
     }
     return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;