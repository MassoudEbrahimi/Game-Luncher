import React, { Component } from 'react';
import Sidebar from './sidebar'
import "./Masterpage.css"


class MasterPage extends Component {
    state = {}
    render() {
        return (
            <div className="page">
                <Sidebar />
                <div className="content">
                {this.props.children}
                </div>
            </div>
        );
    }
}

export default MasterPage;