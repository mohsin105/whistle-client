import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import Loader from './Loader';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useAuthContext();
    // if(user === null) return (<Loader/>);
    if(user === null) return <p>Loading....</p>;

    return user? children: <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;