import React, { Component } from 'react';
import './apphead.css';
//import引入不可用@
import '../../static/fonts/iconfont.css';
class Apphead extends Component {
    render() {
        return (
            <div className="apphead">
                <i className="icon iconfont icon-sousuo"></i>
                <input type="text" id="search" placeholder="选择城市"/>
            </div>
        )
    }
}
export default Apphead;