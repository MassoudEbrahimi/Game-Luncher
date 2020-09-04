import React, { Component } from 'react';
import loadingImage from './loading.svg';
import './Loading.scss'
import logo from './Everfall-Logo.gif'
class Loading extends Component {

  render() {

    const style = {
      display: 'flex',
      userSelect: 'none',
      background: 'none',
      width:"80px",
      height:"80px",
      zIndex: 800000,
      margin:"auto"
    }

    return (
      <div className="loading-logo" style={{textAlign: "center"}}>
        <img src={logo} alt="loading" style={style}/>
        <span className="">
          Loading . . .
        </span>
        {/* <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
          <circle cx="170" cy="170" r="160" stroke="#E2007C" />
          <circle cx="170" cy="170" r="135" stroke="#404041" />
          <circle cx="170" cy="170" r="110" stroke="#E2007C" />
          <circle cx="170" cy="170" r="85" stroke="#404041" />
        </svg>
        <span className="">
          Loading . . .
        </span> */}
        
      </div>

    )

  }
}

export default Loading