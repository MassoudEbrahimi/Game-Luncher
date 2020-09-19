import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { data, post } from 'jquery';
const Track = styled.div`
    width: 100%;
    height: 20px;
    background-color: #222;
    border-radius: 10px;
    box-shadow : inset 0 0 5px #000 
    `;
const Thumb = styled.div`
    width : ${props => props.percentage}%;
    height : 100%;
    background-color: #DC143C;
    border-radius: 8px;
    transition : width 0.4s ease-in-out;
    `;

class ProgressBar extends Component {
    clamp = (min, value, max) => {
        return Math.min(Math.max(min, value), max)
    }
    render() {
        return (
            <Track>
                <Thumb percentage={this.clamp(0, this.props.progressPercent, 100)} />
            </Track>
        );
    }
}

export default ProgressBar;

ProgressBar.propTypes = {
    progressPercent: PropTypes.number
}
