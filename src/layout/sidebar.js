import React, { Component } from 'react';
import './sidebar.css'
import Data from '../Data/SidebarData'
import ProgressBar from '../utils/ProgressBar'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressPercentage: 0
        }
    }
    componentDidMount = () => {
        debugger
        const { progressPercentage } = this.state
        if (progressPercentage < 0) this.setState({ progressPercentage: 0 })
        if (progressPercentage > 100) this.setState({ progressPercentage: 100 })
    }
    Increase = (event) => {
        const { progressPercentage } = this.state;
        if (progressPercentage < 0)
            this.setState({ progressPercentage: 5 })
        else
            this.setState({ progressPercentage: progressPercentage + 5 })

    }
    Decrease = (event) => {
        const { progressPercentage } = this.state;
        if (progressPercentage > 100)
            this.setState({ progressPercentage: 95 })
        else
            this.setState({ progressPercentage: progressPercentage - 5 })
    }
    render() {
        const { progressPercentage } = this.state
        return (
            <div className="sidebar" >
                <img src="images/Everfall.svg" alt="" />
                <ul className="sidebar-parents">
                    {Data.map(node => {
                        return (

                            <li className={node.link === window.location.pathname ? "sidebar-active " : ""} key={node.id}>
                                <div className="d-flex game-text">
                                    <Link className="text-game" to={node.link}>{node.title}</Link>
                                    <Link className="button-playGame" to={node.link}><span className="mdi mdi-play-circle" /></Link>
                                </div>
                                <div className="Game-progressBar" >

                                    <ProgressBar progressPercent={progressPercentage} />
                                    <span style={{ marginTop: "-3px", position: "absolute", left: "30px" }}>Downloading ...</span>
                                    <span style={{ marginTop: "-3px", position: "absolute", right: "30px" }}>
                                        {0 > progressPercentage ? 0 : progressPercentage > 100 ? 100 : progressPercentage}%
                                        </span>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul >
                <div >
                    <button className="btn btn-danger mr-2 mt-3" onClick={this.Increase}>
                        increase</button>
                    <button className="btn btn-danger mr-2 mt-3" onClick={this.Decrease}>
                        Decrease</button>
                </div>
                <div className="sidebar-signout">
                    <Link to="/"><span className="mdi mdi-logout" />SignOut</Link>
                </div>
            </div >
        )
    }
}

export default Sidebar;