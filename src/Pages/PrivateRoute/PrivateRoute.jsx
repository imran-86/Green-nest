import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../LoadingSpinner';
import usePlants from '../../Hooks/usePlants';

const PrivateRoute = ({children}) => {
     const {user} = use(AuthContext)
    //  console.log(user);
    const location = useLocation();
    // console.log(location);
    const {loading} = usePlants()
     if(loading){
        return <LoadingSpinner></LoadingSpinner>
     }
     if(user){
        return children;
     }
     return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;