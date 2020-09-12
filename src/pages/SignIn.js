import React, { Component } from 'react';

import $ from 'jquery'


class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: ""
        }
    }


    
    handleformLogin = async (e) => {
        e.preventDefault();
        debugger
        // $("<script>(async function () { await CefSharp.BindObjectAsync('cefCustomObjectMain');})(); cefCustomObjectMain.add('"+this.state.userName+"','"+this.state.password+"').then((result) => {alert(result);})</script>").appendTo(document.body);
        $("<script>(async function () { await CefSharp.BindObjectAsync('cefCustomObjectMain');})(); cefCustomObjectMain.login('"+this.state.userName+"','"+this.state.password+"').then((result) => {if(result = 'true') { window.location='/LB-2'}})</script>").appendTo(document.body);
    }
    login = () => {
        const { userName, password } = this.state
        return (
            <>
                <img src="images/Art.svg" className="img-fluid ArtImg-Top" alt="" />
                <a className="login-weblink" href="./">
                    <span class="mdi mdi-help"></span>
                </a>
                <div className="login-logo">
                    <img src="images/Everfall.svg" className="img-fluid" alt="" />
                </div>
                <form className="login-form" id="btn-login" onSubmit={this.handleformLogin}>
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
                            <div className="signUp-link" onClick={() => this.props.handleTab()}><span>CREATE ACCOUNT</span></div>
                        </div>
                        <div>
                            <a href="./"><span style={{ float: "left" }}>CANT'T SIGN IN?</span></a>
                            <span style={{ float: "right" }}>v1.0001</span>
                        </div>
                    </div>
                </form>
                <img src="images/Art.svg" className="img-fluid ArtImg-bottom" alt="" />

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