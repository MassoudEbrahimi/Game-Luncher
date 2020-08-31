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
                                    <div className="new-text-content">Aute id laborum dolor eu tempor. Non culpa elit laborum exercitation
                                    nostrud minim deserunt. Minim culpa aliquip dolore cupidatat magna
                                    anim Lorem anim et in. Quis consequat sit ex exercitation laboris.Sit nisi consequat eu
                                    id aliquip irure ipsum occaecat deserunt amet culpa qui. Incididunt aliquip adipisicing
                                    nulla dolor aliqua sunt ad nostrud elit nostrud qui. Elit eu sunt aliquip minim. Ad
                                    elit ipsum ea ullamco qui nisi. Duis ut consequat elit et si
                                    nt. Ad proident quis cupidatat aliqua ut adipisicing fugiat irure
                                    . Ullamco dolore magna sit minim.Nisi ipsum cillum ad aute amet esse exc
                                    epteur nisi. Ut exercitation dolore magna consectetur ullamco in mollit ullamco
                                    ea velit ipsum mollit. Non esse fugiat commodo repreh
                                                 enderit minim consequat laboris dolore tempor irure.</div>
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