import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './component/Login';
import LB2Games from './pages/LB2';


function Routes(props) {
    return (
        <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/LB-2" component={LB2Games} />
        </Router>
    )
}

export default Routes