import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const Private = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    // console.log(location);
    
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    
    if(!user){
        return <Navigate to='/log' state={location?.pathname
        || '/'}></Navigate>
    }
    
    return (
        <div>
        <div>
        {children}
    </div>
    </div>
    );
};

export default Private;