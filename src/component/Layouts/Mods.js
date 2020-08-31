import React, { Component } from 'react';

import Loading from '../loading/loading'
import Data from "../../Data/ModsData"

class Mods extends Component {
    state = {  }
    render() { 
        // if (this.props.data === null) return <Loading />
        return (
            <div className="list-content-data">
                    <ul>
                        {Data.map(node => {
                            return (
                                <li>
                                    <div className="Mods-card">
                                        <img src={node.image} alt="Mods"/>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
        );
    }
}
 
export default Mods;