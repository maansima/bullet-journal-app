import * as React from "react"
import { hot } from "react-hot-loader"
import { Switch, Route } from "react-router-dom"
import HomePage from "./components/home-page/home-page"
import Themetwo from "./components/themetwo/themetwo"
import LoginPage from "./components/login-page/login-page"
import "./App.css"
import SignupPage from "./components/signup-page/signup-page"
import Theme_One from "./components/theme_one/theme-one"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/themetwo" component={Themetwo} />
          <Route exact={true} path="/login" component={LoginPage} />
          <Route exact={true} path="/signup" component={SignupPage} />
          <Route exact={true} path="/theme_one" component={Theme_One} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
