import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
     const {user} = use(AuthContext)
    //  console.log(user);
     if(user){
        return children;
     }
     return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;