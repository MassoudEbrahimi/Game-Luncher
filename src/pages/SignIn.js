import React, { Component } from 'react';


import Handler from "../utils/Handler"
import Toast from '../utils/Toast'
import { LoginAuth } from '../utils/axios'
import Cookies from 'js-cookie'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: null,
            password: null
        }
    }
    handleformLogin = (e) => {
        e.preventDefault();
        const { userName, password } = this.state;
        const request = {
            username: userName,
            password
        }
        debugger
        this.props.history.push("/LB-2")
        let result;
        try {
            Handler.apiHandler((LoginAuth(request)), (res, status) => {
                result = status
                if (result === 200) {
                    Cookies.set("token", res.token)
                    this.props.history.push("/LB-2")
                }
            })
        } catch (error) {
            Toast.Error()
        }
    }
    login = () => {
        const { userName, password } = this.state
        return (
            <>
                <img src="images/Art.svg" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} ArtImg-Top" alt="" />
                <a className="login-weblink" href="./">
                    <span class="mdi mdi-help"></span>
                </a>
                <div className="login-logo">
                    <img src="images/Everfall.svg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />

                </div>
                <form className="login-form" onSubmit={this.handleformLogin}>
                    <div class="user-input-wrp">
                        <br />
                        <input type="text" class="inputText" required
                            onChange={e => this.setState({ userName: e.target.value })}
                            name="" id="" value={userName} autoComplete={false} />
                        <span class="floating-label">Username<span className="mdi mdi-asterisk" /></span>
                    </div>
                    <div class="user-input-wrp">
                        <br />
                        <input type="password" class="inputText" required
                            onChange={e => this.setState({ password: e.target.value })}
                            value={password} autoComplete={false} />
                        <span class="floating-label">Password<span className="mdi mdi-asterisk" /></span>
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
                            <div className="signUp-link" 
                            onClick={() => this.props.handleTab()}
                            ><span>CREATE ACCOUNT</span></div>
                        </div>
                        <div>
                            <a href="./"><span style={{ float: "left" }}>CANT'T SIGN IN?</span></a>
                            <span style={{ float: "right" }}>v1.0001</span>
                        </div>
                    </div>
                </form>
                <img src="images/Art.svg" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} ArtImg-bottom" alt="" />
            </>
        )
    }
    render() {

        return (
            <React.Fragment>
                {this.login()}
            </React.Fragment>
        )
    }
}

export default SignIn;