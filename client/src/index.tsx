import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "react-apollo"
import "sanitize.css/sanitize.css"
import "react-dates/lib/css/_datepicker.css"
import "react-dates/initialize"
import App from "./App"
import "./index.css"
import client from "./apollo"

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
)
