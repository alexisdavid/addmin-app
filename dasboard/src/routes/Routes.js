import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalContext } from "../context";
import PrivateRoute from './PrivateRoute'
import PageIndex from '../pages/PageIndex'
import HomeComponent from '../pages/dashboard/HomeComponent';

const RoutesComponent = () => 
  
        <GlobalContext> 
            <BrowserRouter >
            <Routes>
                <Route path = "/" exact element = { <PageIndex />} />
                <Route path = "/home" exact element = { <HomeComponent /> } />
               {/*   <PrivateRoute path = "/users" exact component = { PageUsers } />
                <PrivateRoute path = "/departments" exact component = { DepartmentsAndGroups } />
                <Route component = { HomeComponent } /> */}
            </Routes>
            </BrowserRouter>
        </GlobalContext>
    


export default RoutesComponent;