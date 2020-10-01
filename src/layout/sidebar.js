import React, { Component } from 'react';
import './sidebar.css'
import Data from '../Data/SidebarData'
import ProgressBar from '../utils/ProgressBar'
import { Link } from 'react-router-dom'
import Loading from '../component/loading/loading'

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
       let checking =  document.getElementById("xxx").innerHTML;  
        const src = document.createElement("script");
        src.type="text/javascript";
        src.async=true;
        src.id="Progress" 
        var node = `var time =setInterval(() => {
        (async function () { await CefSharp.BindObjectAsync('cefCustomObjectMain');})(); cefCustomObjectMain.progStatus().then((result) =>
        {
            if(result < 101 && result >= 0) 
            { 
             document.getElementById("prs").style.visibility = "visible";
             document.getElementById("progStat").style.visibility = "visible";
             document.getElementById("xxx").innerHTML = result;
             
            }else{
            document.getElementById("prs").style.visibility = "collapse";
            document.getElementById("progStat").style.visibility = "collapse";
            document.getElementById("EnjoyGame").style.visibility = "visible";
            clearInterval(time);
        }
        })
        }, 500);
        `;
        src.appendChild(document.createTextNode(node))
        document.body.appendChild(src)
        this.refresher=setInterval(() => {
            var prog = document.getElementById("xxx").innerHTML;
            this.setState({progressPercentageLB2 : prog})
 
        }, 500);
        var prog = document.getElementById("xxx").innerHTML;
        this.setState({progressPercentageLB2 : prog})
        document.body.removeChild(src)
       
  
    }
    componentWillUnmount = ()=>{
        clearInterval(this.refresher)
    }
    handleDownloading = (event, id) => {
   
                const src = document.createElement("script");
                src.type="text/javascript";
                src.async=true;
                src.id="LoginValidate"
                var node = `(async function () { await CefSharp.BindObjectAsync('cefCustomObjectMain');})(); cefCustomObjectMain.playGame();`
                src.appendChild(document.createTextNode(node))
                document.body.appendChild(src)
                document.body.removeChild(src)
    }
    // }
    // Increase = (event) => {
    //     const { progressPercentage } = this.state;
    //     if (progressPercentage < 0)
    //         this.setState({ progressPercentage: 5 })
    //     else
    //         this.setState({ progressPercentage: progressPercentage + 5 })

    // }
    // Decrease = (event) => {
    //     const { progressPercentage } = this.state;
    //     if (progressPercentage > 100)
    //         this.setState({ progressPercentage: 95 })
    //     else
    //         this.setState({ progressPercentage: progressPercentage - 5 })
    // }
    render() {
        const { progressPercentageLB2, progressPercentageLimbo } = this.state
        
        let test = document.getElementById("xxx").innerHTML;
        var test2 = parseInt(test);
        if(test === undefined) return <Loading/>
        return (
            <div className="sidebar" >
                <img src="images/Everfall.svg" alt="" />
                <ul className="sidebar-parents">
                <li className={"/LB-2" === window.location.pathname ? "sidebar-active " : ""} key={1}>
                        <div className="d-flex game-text">
                            <Link className="text-game" to="/LB-2">LB-2</Link>
                            <Link id="EnjoyGame" className="button-playGame" onClick={(e) => this.handleDownloading(e, 1)}>
                            <span  className="mdi mdi-play-circle"/>
                            </Link>
                            <div id="progStat"  style={{right:"10px",position:"absolute",marginTop:"15px"}}>
                            <p style={{ fontSize: "10px" }}>{`Downloading ... ${0 > progressPercentageLB2 ? 0 : progressPercentageLB2 > 100 ? 100 : progressPercentageLB2}%`}</p>
                        
                            </div>
                        </div>
                        {/* <ProgressBars /> */}
                        {window.location.pathname === "/LB-2" && <div className="Game-progressBar" id="prs" >
                            {test2<=100 ? <ProgressBar progressPercent={progressPercentageLB2} /> : null}

                        </div>}
                    </li>
                    <li className={"/Limbo" === window.location.pathname ? "sidebar-active " : ""} key={2}>
                        <div className="d-flex game-text">
                            <Link className="text-game" to="/Limbo">LIMBO</Link>
                            {/* <Link className="button-playGame" onClick={(e) => this.handleDownloading(e, 2)}>
                                <span className={this.state.LimbostartButton === false ? "mdi mdi-play-circle" : "mdi mdi-pause-circle"} />
                            </Link> */}
                        </div>
                        {/* <ProgressBars /> */}
                        {/* {window.location.pathname === "/Limbo" && <div className="Game-progressBar" >
                            <ProgressBar progressPercent={progressPercentageLimbo} />
                            <span style={{ marginTop: "0px", position: "absolute", left: "30px", fontSize: "14px" }}>Downloading ...</span>
                            <span style={{ marginTop: "-3px", position: "absolute", right: "30px" }}>
                                {0 > progressPercentageLimbo ? 0 : progressPercentageLimbo > 100 ? 100 : progressPercentageLimbo}%
                                    </span>
                        </div>} */}
                    </li>
                            {/* <li className={"/LB-2" === window.location.pathname ? "sidebar-active " : ""} key={1}>
                                <div className="d-flex game-text">
                                    <Link className="text-game" to="/LB-2">LB -2</Link>
                                    <Link className="button-playGame" to="/LB-2"><span className="mdi mdi-play-circle" /></Link>
                                </div>
                                <div className="Game-progressBar" >
                                    <ProgressBar progressPercent={progressPercentage} />
                                    <span style={{ marginTop: "0px", position: "absolute", left: "30px",fontSize:"12px" }}>Downloading ...</span>
                                    <span style={{ marginTop: "-3px", position: "absolute", right: "30px" }}>
                                        {0 > progressPercentage ? 0 : progressPercentage > 100 ? 100 : progressPercentage}%
                                        </span>
                                </div>
                            </li>
                            <li className={"/Limbo" === window.location.pathname ? "sidebar-active " : ""} key={2}>
                                <div className="d-flex game-text">
                                    <Link className="text-game" to="/LB-2">Limbo</Link>
                                    <Link className="button-playGame" to={node.link}><span className="mdi mdi-play-circle" /></Link>
                                </div>
                                <div className="Game-progressBar" >
                                    <ProgressBar progressPercent={progressPercentage} />
                                    <span style={{ marginTop: "0px", position: "absolute", left: "30px",fontSize:"14px" }}>Downloading ...</span>
                                    <span style={{ marginTop: "-3px", position: "absolute", right: "30px" }}>
                                        {0 > progressPercentage ? 0 : progressPercentage > 100 ? 100 : progressPercentage}%
                                        </span>
                                </div>
                            </li> */}
                        
                    
                </ul >
                <div className="sidebar-signout">
                    <Link to="/"><span className="mdi mdi-logout" />SignOut</Link>
                </div>
            </div >
        )
    }
}

export default Sidebar;