import React, { Component } from 'react';
import './sidebar.css'
import Data from '../Data/SidebarData'
import ProgressBar from '../utils/ProgressBar'
import { Link } from 'react-router-dom'
import ProgressBars from '../utils/ProgressBars';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressPercentage: 0
        }
    }
    componentDidMount = () => {

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
                    <li className={"/LB-2" === window.location.pathname ? "sidebar-active " : ""} key={1}>
                        <div className="d-flex game-text">
                            <Link className="text-game" to="/LB-2">LB-2</Link>
                            <Link className="button-playGame" to="/LB-2"><span className="mdi mdi-play-circle" /></Link>
                        </div>
                        {/* <ProgressBars /> */}
                        {window.location.pathname === "/LB-2" && <div className="Game-progressBar" >
                            <ProgressBar progressPercent={progressPercentage} />
                            <span style={{ marginTop: "0px", position: "absolute", left: "30px", fontSize: "14px" }}>Downloading ...</span>
                            <span style={{ marginTop: "-3px", position: "absolute", right: "30px" }}>
                                {0 > progressPercentage ? 0 : progressPercentage > 100 ? 100 : progressPercentage}%
                                        </span>
                        </div>}
                    </li>
                    <li className={"/Limbo" === window.location.pathname ? "sidebar-active " : ""} key={2}>
                        <div className="d-flex game-text">
                            <Link className="text-game" to="/Limbo">LIMBO</Link>
                            <Link className="button-playGame" to="/Limbo"><span className="mdi mdi-play-circle" /></Link>
                        </div>
                        {/* <ProgressBars /> */}
                        {window.location.pathname==="/Limbo" &&<div className="Game-progressBar" >
                            <ProgressBar progressPercent={progressPercentage} />
                            <span style={{ marginTop: "0px", position: "absolute", left: "30px", fontSize: "14px" }}>Downloading ...</span>
                            <span style={{ marginTop: "-3px", position: "absolute", right: "30px" }}>
                                {0 > progressPercentage ? 0 : progressPercentage > 100 ? 100 : progressPercentage}%
                                    </span>
                        </div>}
                    </li>
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