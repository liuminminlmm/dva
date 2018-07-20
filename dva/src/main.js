import React, { Component } from 'react';
import dva from 'dva';
import Home from './views/home/home.jsx';
import { Router, Route, Switch } from 'dva/router';
import Play from './views/play/play.jsx';
import AppFooter from './views/appfooter';
import Sy from './views/sy/sy.jsx';
import Choose from './views/choose/choose.jsx';
//dva封装的
let app = dva();
// model
console.log(app);
app.router(({ history }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/choose" component={Choose}></Route>
                {/*<section>*/}
                    <Route path="/index" component={AppFooter}>
                        <Route path="/index/sy" component={Sy}></Route>
                        <Route path="/index/play" component={Play}></Route>
                    </Route>
                {/*</section>*/}
                <Redirect exact to="/index"/>
            </Switch>
        </Router>
    )
})

app.start('#root');