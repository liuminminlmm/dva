// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// document.documentElement.style.fontSize = window.innerWidth / 750 * 100 + "px";
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


//dva封装的原型
/*import React, { Component } from 'react';
import dva from 'dva';
import Home from './views/home/home.jsx';
import { Router, Route,Switch } from 'dva/router';
import Play from './views/play/play.jsx';
let app = dva();
// model
console.log(app);
app.router(({ history }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/play" component={Play}></Route>
            </Switch>
        </Router>
    )
})
app.start('#root');*/

//dva封装路由 ==>dva默认支持异步加载
import React from 'react';
import dva from 'dva';
import { Router, Route, Switch, Redirect } from 'dva/router';
import createHistory from 'history/createBrowserHistory';
//异步fetch数据请求
import fetch from 'dva/fetch';
import App from './App';
import './index.css';
import Home from './views/home/home.jsx';
import Play from './views/play/play.jsx';
import AppFooter from './views/appfooter';
import Sy from './views/sy/sy.jsx';
import Choose from './views/choose/choose.jsx';
//dynamic
import dynamic from 'dva/dynamic';
document.documentElement.style.fontSize = window.innerWidth / 750 * 100 + "px";
//dva封装的 创建的dva实例
//history模式
let app = dva({
    history: createHistory()
});
// let app = dva();
// models=>namespace: "@@dva", state: 0, reducers: {…};router(路由);start(开启最外层的大盒子); history(传递参数) 
console.log(app);

//计数器的加减
app.model({
    // 名字
    namespace: 'count',
    state: 0,
    //不需要做type判断,直接返回值
    reducers: {
        //state是当前下标 action是dispatch触发的传递的值
        add(state, action) {
            return state + 1;
        },
        minus(state, action) {
            return state - 1;
        }
    }
})

//更新视图
app.model({
    // 名字
    namespace: 'username',
    state: '',
    title: [],
    arr: [],
    //不需要做type判断,直接返回值
    //执行同步的
    reducers: {
        update(state, action) {
            return action.payload;
        }
    },
    //执行异步的
    effects: {
        *updateAsync(action, { dispatch, call, put }) {
            //res是reponse对象
            let res = yield call(fetch, 'city.json');
            //end返回promise

            let final = yield res.json();
            //   console.log(final.city);
            final.city.map((item, i) => {
                console.log(item.Alpha);
                this.setState({
                    title: item.Alpha,
                    arr: item.CityList
                })
            })
            yield put({
                type: 'update',
                payload: final.city
            })
        }
    }
})
app.router((routerApi) => {
    return (
        <Router history={routerApi.history}>
            <Switch>
                {/*dva中的一级路由*/}
                <Route path="/choose" component={Choose}></Route>
                {/*<Route path="/home" component={Home}></Route>*/}
                {/*dynamic写路由*/}
                <Route path="/home" component={dynamic({
                    app: app,
                    models: () => [import('./dynamic/dynamic.jsx')],
                    component:()=>import('./views/home/home.jsx')
                })
                }></Route>
            {/*<section>*/}
            <Route path="/main" component={AppFooter}>
                {/*<Route path="/index/sy" component={Sy}></Route>
                        <Route path="/index/play" component={Play}></Route>*/}
            </Route>
            {/*</section>*/}
            <Redirect exact to="/main" />
            </Switch>
        </Router >
    )
})

app.start('#root');
