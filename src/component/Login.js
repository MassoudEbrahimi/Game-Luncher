import React, { Component } from 'react';
import $ from 'jquery'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: null,
            password: null
        }
    }
    componentDidMount() {
    }

    render() {
        const { userName, password } = this.state
        debugger
        return (
            <React.Fragment>
                <div className="d-flex">
                    <div className="login-sidebar col-sm-6 col-md-3 col-lg-3 col-12">
                        <div style={{ textAlign: "center" }}><span style={{ fontSize: "48px" }}>L</span><span style={{ fontSize: "32px" }}>ogin</span></div>
                        <div>
                            <img src="Ev" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
                        </div>
                        <form className="login-form">
                            {/* <div>
                                <div> <label class="label-form-login">Username</label></div>
                                <div style={{ textAlign: "center" }}>
                                    <input type="text" class="form-input"
                                        onChange={e => this.setState({ userName: e.target.value })}
                                        name="" id="" value={userName} autoComplete={false} />
                                </div>
                            </div>
                            <div>
                                <div> <label class="label-form-login">Password</label></div>
                                <div style={{ textAlign: "center" }}>
                                    <input type="text" class="form-input"
                                        onChange={e => this.setState({ password: e.target.value })}
                                        value={password} autoComplete={false} />
                                </div>
                            </div>
                             */}
                            <div class="user-input-wrp">
                                <br />
                                <input type="text" class="inputText" required
                                    onChange={e => this.setState({ userName: e.target.value })}
                                    name="" id="" value={userName} autoComplete={false} />
                                <span class="floating-label">Username</span>
                            </div>
                            <div class="user-input-wrp">
                                <br />
                                <input type="text" class="inputText" required
                                    onChange={e => this.setState({ password: e.target.value })}
                                    value={password} autoComplete={false} />
                                <span class="floating-label">Password</span>
                            </div>
                            <div className="login-Checkbox">
                                <input name="" id="remeberMe" className="remember-login" type="checkbox" value="" />
                                <label className="login-checkmark" for="remeberMe" >Remeber Me</label>
                            </div>
                            <div className="text-center">
                                <button className={
                                    (password === null & userName === null) || (password === "" & userName === "") ?
                                        "btn-login-defualt" : "btn-login-submit"}>
                                    <span className="mdi mdi-login-variant" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="login-content col-sm-6 col-md-9 col-lg-9">
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;