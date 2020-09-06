import React, { Component } from 'react';

import Handler from '../utils/Handler'
import Toast from "../utils/Toast"
import { SignUpuser } from '../utils/axios'



class SignOut extends Component {
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
        const request = {
            username: newUser,
            password: newPassword,
            email: newEmail
        }
        let result
        try {
            Handler.apiHandler((await SignUpuser(request)), (res, status) => {
                if (status === 200) {
                    Toast.Success()
                }
            })
        } catch (error) {

        }
    }
    Logout = () => {
        const { newUser, newPassword, newEmail, confirmnewPassword } = this.state
        return (
            <>
                <img src="images/Art.svg" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} ArtImg-Top" alt="" />
                <a className="login-weblink" href="./">
                    <span class="mdi mdi-help"></span>
                </a>
                <div className="login-logo">
                    <img src="images/Everfall.svg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
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
                            <div className="signUp-link" onClick={() => this.props.handleTab()}><span className="mdi mdi-home" style={{ fontSize: "32px" }} /></div>
                        </div>
                        {/* <div>
                            <a href="./"><span style={{ float: "left" }}>CANT'T SIGN IN?</span></a>
                            <span style={{ float: "right" }}>v1.0001</span>
                        </div> */}
                    </div>

                </form>
                <img src="images/Art.svg" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} ArtImg-bottom" alt="" />
            </>
        )
    }
    render() {

        return (
            <React.Fragment>
                {this.Logout()}
            </React.Fragment>
        )
    }
}

export default SignOut;