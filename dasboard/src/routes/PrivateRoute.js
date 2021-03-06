import React from 'react';
import { verifySession }    from '../utils/sessions';
import { Route, Navigate }  from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
        render = {
            props => {
                if (verifySession()) {
                    return <Component { ...props } />;
                } else {
                    return <Navigate to = "/" />;
                }
            }
        }
    />
);


export default PrivateRoute; 