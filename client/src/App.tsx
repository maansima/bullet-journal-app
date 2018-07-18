import * as React from "react"
import { hot } from "react-hot-loader"
import { Switch, Route } from "react-router-dom"
import HomePage from "./components/home-page/home-page"
import LoginPage from "./components/login-page/login-page"
import "./App.css"
import Theme_One from "./components/theme_one/theme-one"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/login" component={LoginPage} />
          <Route exact={true} path="/theme_one" component={Theme_One} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
