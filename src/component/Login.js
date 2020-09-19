import React, { Component } from 'react';
import PageShell from "../utils/Animate"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
                        <ReactCSSTransitionGroup
                            transitionAppear={true}
                            transitionAppearTimeout={600}
                            transitionEnterTimeout={600}
                            transitionLeaveTimeout={200}
                            transitionName={window.location.pathname === '/signup' ? 'SlideIn' : window.location.pathname ==="/" ? "SlideIn" : "SlideOut" }
                        >
                            {this.props.children}
                        </ReactCSSTransitionGroup>

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
