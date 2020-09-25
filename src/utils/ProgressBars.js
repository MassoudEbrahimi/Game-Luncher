import React, { Component } from 'react';
import LaddaButton, { XL, EXPAND_RIGHT } from 'react-ladda';
import Pusher from 'pusher-js';
import { XS } from 'react-ladda/dist/constants';

class ProgressBars extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            progress: 0,
        }
    }
    componentDidMount() {
        const pusher = new Pusher('<your app key>', {
            cluster: '<your app cluster>',
            encrypted: true,
        });

        const channel = pusher.subscribe('upload');
        channel.bind('progress', data => {
            this.setState({
                progress: data.percent / 100,
            });

            if (data.percent === 100) {
                this.setState({
                    loading: false,
                    progress: 0,
                });
            }
        });
    }

    handleClick = event => {
        event.preventDefault();

        this.setState({
            loading: !this.state.loading,
        });
        fetch('http://localhost:5000/upload', {
            method: 'POST',
        }).catch(error => console.log(error));
    };

    render() {
        const { loading, progress } = this.state;
        const message = loading ? (
            <span className="progress-text">{progress * 100}% completed</span>
        ) : null;
        return (
            <div className="progressBars" >
                {/* <h1>Imaginary Image Upload Service</h1> */}
                <LaddaButton
                    loading={this.state.loading}
                    onClick={this.handleClick}
                    progress={this.state.progress}
                    data-color="#DC143C"
                    data-size={XS}
                    data-style={EXPAND_RIGHT}
                    data-spinner-size={25}
                    data-spinner-color="#DC143C"
                    data-spinner-lines={10}>
                   Downloading ... {message}
        </LaddaButton>
               
            </div>
        );
    }
}
export default ProgressBars;