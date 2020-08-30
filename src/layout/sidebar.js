import React, { Component } from 'react';
import './sidebar.css'
import Data from '../Data/SidebarData'
import { Link } from 'react-router-dom'

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <img src="images/Everfall.svg" alt="" />
                <ul className="sidebar-parents">
                    {Data.map(node => {
                        return (
                            <li key={node.id}><Link to={node.link}>{node.title}</Link></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Sidebar;