import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

let  PrivateRoute = ({component: PrivateComponent, isAuthorized, path, ...rest})=>{ 
    return <Route {...rest} render={({path}) => isAuthorized ? (<PrivateComponent path={path}/>) : <Redirect to="/login"/>}/>
}   


export default withAuth(PrivateRoute);
