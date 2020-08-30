import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './component/Login';


function Routes(props) {
    return (
        <Router>
            <Route exact path="/" component={Login} />
        </Router>
    )
}

export default Routes