import React, { Component } from 'react';
import "./component/Login.css"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap/dist/react-bootstrap.js"
import "@mdi/font/css/materialdesignicons.css"
import {ToastContainer } from 'react-toastify'
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer
          position="top-right"
          containerId="2"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={true}
          rtl={true}
          limit={3}
          pauseOnFocusLoss
          draggable={false}
          enableMultiContainer={false}
          pauseOnHover
        />
        <div className="">
          <Routes />
        </div>
      </React.Fragment>
    );
  }
}

export default App;