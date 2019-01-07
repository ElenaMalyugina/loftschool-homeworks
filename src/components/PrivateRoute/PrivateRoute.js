import React from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

let  PrivateRoute = ({component: PrivateComponent, isAuthorized, path, ...rest})=>{ 
    return <Route {...rest} render={(pr) => isAuthorized ? (<PrivateComponent match={pr.match}/>) : <Redirect to="/login"/>}/>
}   


export default withAuth(PrivateRoute);
