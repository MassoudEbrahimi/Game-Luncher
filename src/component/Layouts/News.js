import React, { Component } from 'react';

import Loading from '../loading/loading'
import Data from '../../Data/NewsData'
class News extends Component {
    state = {}
    render() {
        // if (this.props.data === null) return <Loading />
        return (
            <div className="list-content-data">
                <ul>
                    {Data.map(node => {
                        return (
                            <li>
                                <div className="news-content-data">
                                    <div className="news-card">
                                        <img src={node.image} alt="news" />
                                    </div>
                                    <div className="new-text-content">LB-2 Is a non-linear horror game where you are hunted by 3 intelligent creatures in the underground lab they were made in. The beasts have killed almost all of your colleagues and now it is solely up to you to get to the facility's weapon armory and kill them before they escape.</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default News;