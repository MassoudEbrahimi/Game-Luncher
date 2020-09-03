import React, { Component } from 'react';

import MasterPage from '../layout/Masterpage';
import Achievements from '../component/Layouts/Achievements';
import Mods from '../component/Layouts/Mods'
import News from '../component/Layouts/News'


class LB2Games extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    render() {
        const { data } = this.state
        return (
            <MasterPage>
                <div className="masterpage-content">
                    <div className="achievements-content">
                        <span className="title-achievement" >Achievements</span>
                        <Achievements data={data} />
                    </div>
                    <div className="Mods-content">
                        <span className="title-achievement">Mods</span>
                        <Mods data={data} />
                    </div>
                    <div className="news-content">
                        <span className="title-achievement">News</span>
                        <News data={data} />
                    </div>
                </div>
            </MasterPage>
        );
    }
}

export default LB2Games;