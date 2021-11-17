import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalContext } from "../context";

import PageIndex from '../pages/PageIndex'

const RoutesComponent = () => 
  
        <GlobalContext> 
            <BrowserRouter >
            <Routes>
                <Route path = "/" exact element = { <PageIndex />} />
                {/* <PrivateRoute path = "/home" exact component = { HomeComponent } />
                <PrivateRoute path = "/users" exact component = { PageUsers } />
                <PrivateRoute path = "/departments" exact component = { DepartmentsAndGroups } />
                <Route component = { HomeComponent } /> */}
            </Routes>
            </BrowserRouter>
        </GlobalContext>
    


export default RoutesComponent;