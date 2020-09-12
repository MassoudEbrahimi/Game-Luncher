import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import LB2Games from './pages/LB2';
import Limbo from './pages/Limbo';
import SignIn from './pages/SignIn';
import SignOut from './pages/Signout';


function Routes(props) {
    return (
        <Router >
            {/*Achievement */}

            <Route exact path="/LB-2" component={LB2Games} />
            <Route exact path="/Limbo" component={Limbo} />
            {/* Login */}

            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignOut} />
        </Router>
    )
}

export default Routes