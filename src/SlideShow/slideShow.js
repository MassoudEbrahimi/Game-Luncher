import React, { Component } from 'react';

import './slideShow.css'

class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // images: null,
            fadedleft: true,
            fadedright: false,
            start: 0,
            finish: 5
        }
    }
    leftClick() {
        let start = this.state.start;
        let finish = this.state.finish;
        if (start > 0 && finish > 0) {
            this.setState({
                start: start - 5,
                finish: finish - 5,
            });
        } else {
            this.setState({
                fadedleft: true
            });
        }
        this.setState({
            fadedright: false
        })
    }
    rightClick() {
        const { images } = this.props
        let start = this.state.start;
        let finish = this.state.finish;
        if (finish < images.length) {
            this.setState({
                start: start + 5,
                finish: finish + 5
            });
        } else {
            this.setState({
                fadedright: true
            });
        }

        this.setState({
            fadedleft: false
        });
    }
    render() {
        const { images } = this.props
        var startindex = this.state.start;
        var finishindex = this.state.finish;
        const fadedleft = this.state.fadedleft ? "arrow-left faded-left" : "arrow-left";
        const fadedright = this.state.fadedright ? "arrow-right faded-right" : "arrow-right";
        return (
            <div className="slideshow row">
                <div className={fadedleft} onClick={this.leftClick.bind(this)}></div>
                {
                    images.slice(startindex, finishindex).map((image, imageindex) => {
                        return (
                            <div key={imageindex}>
                                <img src={image.image} alt="achievements" />
                            </div>
                        )
                    })
                }
                <div className={fadedright} onClick={this.rightClick.bind(this)}></div>
            </div>
        )
    }
};
export default ImageList