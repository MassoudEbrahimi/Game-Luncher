import React, { Component } from 'react';
import Sidebar from './layout/Masterpage';
import Login from './component/Login';
import "./component/Login.css"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap/dist/react-bootstrap.js"
import "font-awesome/css/font-awesome.css"

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <div className="">
          <Login />
        </div>
      </React.Fragment>
    );
  }
}

export default App;