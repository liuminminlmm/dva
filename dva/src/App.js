// 正常
/*import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppFooter from './views/appfooter';
import Sy from './views/sy/sy.jsx';
import Play from './views/play/play.jsx';
import Choose from './views/choose/choose.jsx';
// Switch必须用HashRouter包含
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Switch>
            <Route path="/choose" component={Choose}></Route>
            <section>
              <Route path="/index" component={AppFooter}></Route>
              <Route path="/index/sy" component={Sy}></Route>
              <Route path="/index/play" component={Play}></Route>
            </section>
            <Redirect exact to="/index" />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
export default App;*/

//dva封装的
import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="app">
      </div>
    )
  }
}

export default App;
