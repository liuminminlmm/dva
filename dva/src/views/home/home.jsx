import React, { Component } from 'react';
//dva中的redux使用
import { connect } from 'dva';
//dva请求数据的==>同步
// import fetch from 'dva/fetch';
// console.log(fetch);
class Home extends Component {
    constructor() {
        super();
        this.state = {
            arr: []
        }
        this.updateFns = this.updateFns.bind(this);
        this.updateDynamicFn = this.updateDynamicFn.bind(this);
    }
    render() {
        return (
            <div className="home">
                Home{this.props.home}
                <h1 onClick={this.updateFn}>{this.props.username}</h1>
                <h1 onClick={this.updateFns}>async update</h1>
                <p onClick={this.updateDynamicFn}>dynamic点击</p>
            </div>
        )
    }
    //执行的同步
    updateFn = () => {
        this.props.dispatch({
            type: 'username/update',
            payload: '同步'
        })
    }
    //执行的异步
    updateFns() {
        this.props.dispatch({
            type: 'username/updateAsync',
            payload: '异步'
        })
    }
   updateDynamicFn(){
        this.props.dispatch({
            type: 'home/updateDynamic',
            payload: 'Dynamic异步操作'
        })
   }
}
export default connect((state) => {
    console.log(state)
    return {
        username: state.payload,
        home:state.home
    }
})(Home);