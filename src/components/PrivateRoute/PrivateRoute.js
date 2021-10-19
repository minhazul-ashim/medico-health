import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingScreen></LoadingScreen>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user ? children : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: location }
                }}
            >
            </Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;