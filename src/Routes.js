import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './component/Login';
import Achivment from './pages/Achivment';


function Routes(props) {
    return (
        <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/achivement" component={Achivment} />
        </Router>
    )
}

export default Routes