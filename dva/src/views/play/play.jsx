import React, { Component } from 'react';
import { connect } from 'dva';
class Play extends Component {
    constructor() {
        super();
        this.chooseStart = this.chooseStart.bind(this);
    }
    render() {
        return (
            <div className="play">
                <h1 onClick={this.chooseStart}>出发地</h1>
            </div>
        )
    }
    chooseStart() {
        this.props.history.replace('/choose')
    }
}
export default Play;