import React from 'react';
import { Router, Route, Switch,Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import HomeIndex from './routes/home/index';
//import { Link } from 'react-router';
const HomeIndexs = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <Route path="/test/ga" exact component={HomeIndex}/>
  </div>
) 
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/home" exact component={HomeIndex} />
      </Switch>
    </Router>
  );
  
}

export default RouterConfig;
