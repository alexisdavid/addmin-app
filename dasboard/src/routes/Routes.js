import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalContext } from "../context";
import PageIndex from '../pages/PageIndex'
import HomeComponent from '../pages/dashboard/HomeComponent';
import UsersComponent from '../pages/gestion/Users/UsersComponent';
import Department from '../pages/gestion/departments/Department';

const RoutesComponent = () => 
  
        <GlobalContext> 
            <BrowserRouter >
            <Routes>
                <Route path = "/" exact element = { <PageIndex />} />
                <Route path = "/home" exact element = { <HomeComponent /> } />
                <Route path = "/users" exact element = { <UsersComponent /> } />
                <Route path = "/departments" exact element = { <Department /> } />
               {/*   <PrivateRoute path = "/users" exact component = { PageUsers } />
                <PrivateRoute path = "/departments" exact component = { DepartmentsAndGroups } />
                <Route component = { HomeComponent } /> */}
            </Routes>
            </BrowserRouter>
        </GlobalContext>
    


export default RoutesComponent;