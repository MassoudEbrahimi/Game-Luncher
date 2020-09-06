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
                            <li className={node.link === window.location.pathname ? "sidebar-active d-flex" : "d-flex"} key={node.id}>
                                <Link to={node.link}>{node.title}</Link>
                                <Link className="button-playGame" to={node.link}><span className="mdi mdi-play-circle" /></Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="sidebar-signout">
                    <Link to="/"><span className="mdi mdi-logout" />SignOut</Link>
                </div>
            </div>
        )
    }
}

export default Sidebar;