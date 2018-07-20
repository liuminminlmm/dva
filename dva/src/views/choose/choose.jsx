import React, { Component } from 'react';
import './choose.css';
class Choose extends Component {
    constructor(){
        super();
        this.deleteFn = this.deleteFn.bind(this);
    }
    render() {
        return (
            <div className="choose">
                <h1><span onClick={this.deleteFn}>X</span> 选择城市</h1>
                <div className="right">
                    <p>推荐</p>
                    <p>推荐</p>
                    <p>推荐</p>
                    <p>A</p>
                    <p>B</p>
                    <p>C</p>
                    <p>D</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                </div>
            </div>
        )
    }
    deleteFn(){
        this.props.history.push('/index/sy');
    }
}
export default Choose;