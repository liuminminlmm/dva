import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Apphead from '../../views/apphead';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Sy from '../sy/sy.jsx';
//引用dva的connect
import { connect } from 'dva';
class AppFooter extends Component {
    constructor() {
        super();
        this.addFn = this.addFn.bind(this);
        this.minusFn = this.minusFn.bind(this);
    }
    render() {
        return (
            <Fragment>
                <Apphead />
                <div className="appfooter">
                    <ul>
                        <li><Link to="/main/sy">首页</Link></li>
                        {/*<li><Link to="/home/sy">目的地</Link></li>*/}
                        <li><Link to="/home">发现</Link></li>
                        <li><Link to="/index/play">行程玩法</Link></li>
                        <li><Link to="/index/play">我的</Link></li>
                    </ul>
                    <button onClick={this.addFn}>增加</button>
                    <h1>{this.props.count}</h1>
                    <button onClick={this.minusFn}>减少</button>
                </div>
                {/*dva中的2级路由*/}
                <Route path="/main/sy" component={Sy}></Route>
            </Fragment>
        )
    }
    addFn() {
        //在dispatch时已经判断过type了,dispatch触发reducers接受
        this.props.dispatch({
            //type是=>namespace/的函数名
            type: 'count/add',

        })
    }
    minusFn() {
        //在dispatch时已经判断过type了
        this.props.dispatch({
            //type是=>namespace/的函数名
            type: 'count/minus'
        })
    }
}
export default connect((state) => {
    return {
        count: state.count
    }
})(AppFooter);