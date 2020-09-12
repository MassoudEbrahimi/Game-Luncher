import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTabID: 0
        }
    }
    handleTabSignin = () => {
        this.setState({ activeTabID: 1 })
    }
    handleTabSignout = () => {
        this.setState({ activeTabID: 0 })
    }
    render() {
        // const { activeTabID } = this.state
        return (
            <React.Fragment>
                <div className="d-flex login-content">
                    <div className="login-sidebar card " >
                        {this.props.children}
                        {/* <Switch>
                            <Route exact path="/" component={SignIn} />
                            <Route exact path="/singup" component={SignOut} />
                        </Switch> */}
                        {/* {activeTabID === 0 && <SignIn handleTab={this.handleTabSignin} />}
                        {activeTabID === 1 && <SignOut handleTab={this.handleTabSignout} />} */}
                    </div>
                    {/* <div className="login-content col-sm-5 col-md-8 col-lg-8">
                    </div> */}
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
