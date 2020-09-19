import React, { Component } from 'react';

import $ from 'jquery'
import Login from '../component/Login';
import { Link } from 'react-router-dom';


class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: null,
            newPassword: null,
            newEmail: null,
            confirmnewPassword: null
        }
    }
    handleformSignup = async (e) => {
        e.preventDefault();
        const { newEmail, newPassword, newUser } = this.state
        $("<script>(async function () { await CefSharp.BindObjectAsync('cefCustomObjectMain');})(); cefCustomObjectMain.signup('" + newUser + "','" + newPassword + "','" + newEmail + "').then((result) => {if(result = 'true') { window.location='/LB-2'}})</script>").appendTo(document.body);
    }
    Logout = () => {
        const { newUser, newPassword, newEmail, confirmnewPassword } = this.state
        return (
            <div className="signIn-page">
                <img src="images/Art.svg" className="img-fluid ArtImg-Top" alt="" />
                <a className="login-weblink" href="./">
                    <span class="mdi mdi-help"></span>
                </a>
                <div className="login-logo">
                    <img src="images/Everfall.svg" class="img-fluid" alt="" />
                    <br />
                    <br />
                    <br />
                    <h3>SIGN UP</h3>
                </div>
                <form className="signUp-form" onSubmit={this.handleformSignup}>
                    <div class="user-input-wrp">
                        <br />
                        <input type="text" class="inputText" required
                            onChange={e => this.setState({ newUser: e.target.value })}
                            name="" id="" value={newUser} autoComplete={false} />
                        <span class="floating-label">Username<span className="mdi mdi-asterisk" /></span>
                    </div>
                    <div class="user-input-wrp">
                        <br />
                        <input type="email" className="inputText" required
                            onChange={e => this.setState({ newEmail: e.target.value })}
                            name="" id="" value={newEmail} autoComplete={false} />
                        <span className="floating-label">Email<span className="mdi mdi-asterisk" /></span>
                    </div>
                    <div class="user-input-wrp">
                        <br />
                        <input type="password" class="inputText" required
                            onChange={e => this.setState({ newPassword: e.target.value })}
                            value={newPassword} autoComplete={false} />
                        <span class="floating-label">Password<span className="mdi mdi-asterisk" /></span>
                    </div>
                    <div class="user-input-wrp">
                        <br />
                        <input type="password" class="inputText" required
                            onChange={e => this.setState({ confirmnewPassword: e.target.value })}
                            value={confirmnewPassword} autoComplete={false} />
                        <span class="floating-label">Confirm Password<span className="mdi mdi-asterisk" /></span>
                    </div>
                    <div className="login-Checkbox">
                        <input name="" id="remeberMe" className="remember-login" type="checkbox" value="" />
                        <label className="login-checkmark" for="remeberMe" style={{ fontSize: "14px" }} >I agree all statments in terms of service</label>
                    </div>
                    <div className="text-center">
                        <button className={
                            (newPassword === null & newUser === null) || (newPassword === "" & newUser === "") ?
                                "btn-login-defualt-signup" : "btn-login-submit-signup"}>
                            <span className="mdi mdi-login-variant" />
                        </button>
                    </div>
                    <div className="login-footer">
                        <div>
                            <Link to="/" className="signUp-link"
                            // onClick={() => this.props.handleTab()}
                            ><span className="mdi mdi-home" style={{ fontSize: "32px" }} /></Link>
                        </div>
                        {/* <div>
                            <a href="./"><span style={{ float: "left" }}>CANT'T SIGN IN?</span></a>
                            <span style={{ float: "right" }}>v1.0001</span>
                        </div> */}
                    </div>

                </form>
                <img src="images/Art.svg" className="img-fluid ArtImg-bottom-signup" alt="" />
            </div>

        )
    }
    render() {

        return (
            <React.Fragment>
                <Login>
                    {this.Logout()}
                </Login>
            </React.Fragment>
        )
    }
}

export default SignUp;