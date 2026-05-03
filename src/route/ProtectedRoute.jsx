import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute =()=>{
    const userapi = false;
    return userapi ? <Outlet/> : <Navigate to={'/'}/>
}


export default ProtectedRoute
