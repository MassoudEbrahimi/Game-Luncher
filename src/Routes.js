import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './component/Login';
import LB2Games from './pages/LB2';
import Limbo from './pages/Limbo';


function Routes(props) {
    debugger
    return (
        <Router >
            <Route exact path="/" component={Login} />
            <Route exact path="/LB-2" component={LB2Games} />
            <Route exact path="/Limbo" component={Limbo} />
        </Router>
    )
}

export default Routes