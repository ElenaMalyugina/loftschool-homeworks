import React from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

let  PrivateRoute = ({component: PrivateComponent, isAuthorized, path, ...rest})=>{ 
    return <Route {...rest} render={(obj) => isAuthorized ? (<PrivateComponent match={obj.match}/>) : <Redirect to="/login"/>}/>
}   


export default withAuth(PrivateRoute);
