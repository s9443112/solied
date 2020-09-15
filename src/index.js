import React from 'react';
import ReactDOM from 'react-dom';

import Sliderbar from "./page/sliderbar/index";
import Home from "./page/home/index"
import Dashboard from "./page/dashboard/index"
import Statistics from "./page/statistics/index"
import History from "./page/history/index"
import Login from './page/login/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

import './index.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }


  handleChangeValue = e => this.setState({ value: e });

  render() {
    return (
      <Router>
        <Switch>

          {/* <Route path={`${process.env.PUBLIC_URL}/`}>
            <Sliderbar value={this.state.value}>
              <Redirect to={`${process.env.PUBLIC_URL}/dashboard`} />
            </Sliderbar>
          </Route> */}
          <Route path={`${process.env.PUBLIC_URL}/home`} >
            <Sliderbar value={this.state.value}>
              <Home title={"Home"} handleChangeValue={this.handleChangeValue} />
            </Sliderbar>
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/dashboard`} >
            <Sliderbar value={this.state.value}>
              <Dashboard title={"戰情看板"} handleChangeValue={this.handleChangeValue} />
            </Sliderbar>
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/statistics`} >
            <Sliderbar value={this.state.value}>
              <Statistics title={"數據統計"} handleChangeValue={this.handleChangeValue} />
            </Sliderbar>
          </Route>

          <Route path={`${process.env.PUBLIC_URL}/history`} >
            <Sliderbar value={this.state.value}>
              <History title={"歷史檢視"} handleChangeValue={this.handleChangeValue} />
            </Sliderbar>
          </Route>

          <Route path={`${process.env.PUBLIC_URL}/login`} >
            <Login title={"登入"} handleChangeValue={this.handleChangeValue} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
