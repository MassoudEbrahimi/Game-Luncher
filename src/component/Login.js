import React, { Component } from 'react';
import $ from 'jquery'
import {Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: null,
            password: null,
            newUser: null,
            newPassword: null,
            activeTabID: 0
        }
    }
    componentDidMount() {
    }
    loginform = () => {
        const { userName, password } = this.state
        return (
            <React.Fragment>
                <img src="images/Art.svg" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} ArtImg-Top" alt="" />
                <a className="login-weblink" href="./">
                    <span class="mdi mdi-help"></span>
                </a>
                <div className="login-logo">
                    <img src="images/Everfall.svg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />

                </div>
                <form className="login-form">
                    <div class="user-input-wrp">
                        <br />
                        <input type="text" class="inputText" required
                            onChange={e => this.setState({ userName: e.target.value })}
                            name="" id="" value={userName} autoComplete={false} />
                        <span class="floating-label">Username</span>
                    </div>
                    <div class="user-input-wrp">
                        <br />
                        <input type="password" class="inputText" required
                            onChange={e => this.setState({ password: e.target.value })}
                            value={password} autoComplete={false} />
                        <span class="floating-label">Password</span>
                    </div>
                    <div className="login-Checkbox">
                        <input name="" id="remeberMe" className="remember-login" type="checkbox" value="" />
                        <label className="login-checkmark" for="remeberMe" >Stay signed in</label>
                    </div>
                    <div className="text-center">
                        <button className={
                            (password === null & userName === null) || (password === "" & userName === "") ?
                                "btn-login-defualt" : "btn-login-submit"}>
                            <span className="mdi mdi-login-variant" />
                        </button>
                    </div>
                    <div className="login-footer">
                        <div>
                            <div className="signUp-link" onClick={e => this.setState({ activeTabID: 1 })}><span>CREATE ACCOUNT</span></div>
                        </div>
                        <div>
                            <a href="./"><span style={{ float: "left" }}>CANT'T SIGN IN?</span></a>
                            <span style={{ float: "right" }}>v1.0001</span>
                        </div>
                    </div>
                </form>
                <img src="images/Art.svg" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} ArtImg-bottom" alt="" />
            </React.Fragment>
        )
    }
    signUpform = () => {
        const { newUser, newPassword } = this.state
        return (
            <React.Fragment>
                <img src="images/Art.svg" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} ArtImg-Top" alt="" />
                <a className="login-weblink" href="./">
                    <span class="mdi mdi-help"></span>
                </a>
                <div className="login-logo">
                    <img src="images/Everfall.svg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />

                </div>
                <form className="signUp-form" onSubmit={this.handleSignup}>
                    <div class="user-input-wrp">
                        <br />
                        <input type="text" class="inputText" required
                            onChange={e => this.setState({ newUser: e.target.value })}
                            name="" id="" value={newUser} autoComplete={false} />
                        <span class="floating-label">Usename</span>
                    </div>
                    <div class="user-input-wrp">
                        <br />
                        <input type="email" class="inputText" required
                            onChange={e => this.setState({ newUser: e.target.value })}
                            name="" id="" value={newUser} autoComplete={false} />
                        <span class="floating-label">Email</span>
                    </div>
                    <div class="user-input-wrp">
                        <br />
                        <input type="password" class="inputText" required
                            onChange={e => this.setState({ newPassword: e.target.value })}
                            value={newPassword} autoComplete={false} />
                        <span class="floating-label">Password</span>
                    </div>
                    <div class="user-input-wrp">
                        <br />
                        <input type="password" class="inputText" required
                            onChange={e => this.setState({ newPassword: e.target.value })}
                            value={newPassword} autoComplete={false} />
                        <span class="floating-label">Confirm Password</span>
                    </div>
                    <div className="login-Checkbox">
                        <input name="" id="remeberMe" className="remember-login" type="checkbox" value="" />
                        <label className="login-checkmark" for="remeberMe" >I agree all statments in terms of service</label>
                    </div>
                    <div className="text-center">
                        <button className={
                            (newPassword === null & newUser === null) || (newPassword === "" & newUser === "") ?
                                "btn-login-defualt" : "btn-login-submit"}>
                            <span className="mdi mdi-login-variant" />
                        </button>
                    </div>
                    <div className="login-footer">
                        <div>
                            <div className="signUp-link" onClick={e => this.setState({ activeTabID: 0 })}><span className="fa fa-home" style={{fontSize:"32px"}}/></div>
                        </div>
                        {/* <div>
                            <a href="./"><span style={{ float: "left" }}>CANT'T SIGN IN?</span></a>
                            <span style={{ float: "right" }}>v1.0001</span>
                        </div> */}
                    </div>
                </form>
                <img src="images/Art.svg" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} ArtImg-bottom" alt="" />
            </React.Fragment>
        )
    }
    render() {
        const { activeTabID } = this.state
        debugger
        return (
            <React.Fragment>
                <div className="d-flex login-content">
                    <div className="login-sidebar card " >
                        {activeTabID === 0 ? this.loginform() : this.signUpform()}
                        {/* {activeTabID === 1 && } */}
                    </div>
                    {/* <div className="login-content col-sm-5 col-md-8 col-lg-8">
                    </div> */}
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
