import React, { Component } from 'react';
import Sidebar from './sidebar'
import "./Masterpage.css"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class MasterPage extends Component {
    render() {
        return (
            <div className="page">
                <Sidebar />
                <div className="content">
                    <ReactCSSTransitionGroup
                        transitionAppear={true}
                        transitionAppearTimeout={600}
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={200}
                        transitionName={window.location.pathname === '/LB-2' ? 'SlideIn' : window.location.pathname === "/Limbo" ? "SlideIn" : "SlideOut"}
                    >
                        {this.props.children}
                    </ReactCSSTransitionGroup>
                    {/* {this.props.children} */}
                </div>
            </div>
        );
    }
}

export default MasterPage;