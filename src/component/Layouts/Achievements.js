import React, { Component } from 'react';

import Loading from '../loading/loading'
import Data from '../../Data/AchievementData'

class Achievements extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        if (this.props.data === null) return <Loading />
        return (
            <React.Fragment>
                <div className="list-content-data">
                    <ul>
                        {Data.map(node => {
                            return (
                                <li>
                                    <div className="achievement-card">
                                        <img src={node.image} alt="achievements" />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Achievements;