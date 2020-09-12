import React, { Component } from 'react';
import "./component/Login.css"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap/dist/react-bootstrap.js"
import "@mdi/font/css/materialdesignicons.css"

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="">
          <Routes />
        </div>
      </React.Fragment>
    );
  }
}

export default App;