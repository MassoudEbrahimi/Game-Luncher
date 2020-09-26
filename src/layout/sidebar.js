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
            progressPercentageLimbo: 0,
            progressPercentageLB2: 0,
            LimbostartButton: false,
            LB2startButton: false
        }
    }
    componentDidMount = () => {
        const { progressPercentageLB2, progressPercentageLimbo } = this.state
        if (window.location.pathname === "/Limbo") {
            if (progressPercentageLimbo < 0) this.setState({ progressPercentageLimbo: 0 })
            if (progressPercentageLimbo > 100) this.setState({ progressPercentageLimbo: 100 })
        }
        if (window.location.pathname === "/LB-2") {
            if (progressPercentageLB2 < 0) this.setState({ progressPercentageLB2: 0 })
            if (progressPercentageLB2 > 100) this.setState({ progressPercentageLB2: 100 })
        }
    }
    Increase = (event) => {
        const { progressPercentageLB2, progressPercentageLimbo } = this.state
        if (window.location.pathname === "/LB-2") {
            if (progressPercentageLB2 < 0)
                this.setState({ progressPercentageLB2: 5 })
            else
                this.setState({ progressPercentageLB2: progressPercentageLB2 + 5 })
        }
        if (window.location.pathname === "/Limbo") {
            if (progressPercentageLimbo < 0)
                this.setState({ progressPercentageLimbo: 5 })
            else
                this.setState({ progressPercentageLimbo: progressPercentageLimbo + 5 })
        }
    }
    Decrease = (event) => {
        const { progressPercentageLB2, progressPercentageLimbo } = this.state
        if (window.location.pathname === "/LB-2") {
            if (progressPercentageLB2 > 100)
                this.setState({ progressPercentageLB2: 95 })
            else
                this.setState({ progressPercentageLB2: progressPercentageLB2 - 5 })
        }
        if (window.location.pathname === "/Limbo") {
            if (progressPercentageLimbo > 100)
                this.setState({ progressPercentageLimbo: 95 })
            else
                this.setState({ progressPercentageLimbo: progressPercentageLimbo - 5 })
        }


    }
    handleDownloading = (event, id) => {
        debugger
        if (id === 2)
            this.setState({ LimbostartButton: !this.state.LimbostartButton })
        else
            if (id === 1)
                this.setState({ LB2startButton: !this.state.LB2startButton })

        if (id === 1) {
            //Ajaax
        }
        if (id === 1) {
            //Ajax
        }
    }
    render() {
        const { progressPercentageLB2, progressPercentageLimbo } = this.state
        return (
            <div className="sidebar" >
                <img src="images/Everfall.svg" alt="" />
                <ul className="sidebar-parents">
                    <li className={"/LB-2" === window.location.pathname ? "sidebar-active " : ""} key={1}>
                        <div className="d-flex game-text">
                            <Link className="text-game" to="/LB-2">LB-2</Link>
                            <Link className="button-playGame" onClick={(e) => this.handleDownloading(e, 1)}>
                                <span className={this.state.LB2startButton === false ? "mdi mdi-play-circle" : "mdi mdi-pause-circle"} />
                            </Link>
                        </div>
                        {/* <ProgressBars /> */}
                        {window.location.pathname === "/LB-2" && <div className="Game-progressBar" >
                            <ProgressBar progressPercent={progressPercentageLB2} />
                            <span style={{ marginTop: "0px", position: "absolute", left: "30px", fontSize: "14px" }}>Downloading ...</span>
                            <span style={{ marginTop: "-3px", position: "absolute", right: "30px" }}>
                                {0 > progressPercentageLB2 ? 0 : progressPercentageLB2 > 100 ? 100 : progressPercentageLB2}%
                                        </span>
                        </div>}
                    </li>
                    <li className={"/Limbo" === window.location.pathname ? "sidebar-active " : ""} key={2}>
                        <div className="d-flex game-text">
                            <Link className="text-game" to="/Limbo">LIMBO</Link>
                            <Link className="button-playGame" onClick={(e) => this.handleDownloading(e, 2)}>
                                <span className={this.state.LimbostartButton === false ? "mdi mdi-play-circle" : "mdi mdi-pause-circle"} />
                            </Link>
                        </div>
                        {/* <ProgressBars /> */}
                        {window.location.pathname === "/Limbo" && <div className="Game-progressBar" >
                            <ProgressBar progressPercent={progressPercentageLimbo} />
                            <span style={{ marginTop: "0px", position: "absolute", left: "30px", fontSize: "14px" }}>Downloading ...</span>
                            <span style={{ marginTop: "-3px", position: "absolute", right: "30px" }}>
                                {0 > progressPercentageLimbo ? 0 : progressPercentageLimbo > 100 ? 100 : progressPercentageLimbo}%
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