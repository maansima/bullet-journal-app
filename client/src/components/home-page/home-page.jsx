import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import LoginPage from "../login-page/login-page"
import Navigation from "../navigation/navigation"

const GET_ME = gql`
query me {
  me {
    id
    name
    email
  }
}
`
class HomePage extends React.Component {
  onLogout = () => {
    localStorage.removeItem("token")
    this.props.history.push("/login")
  }
  render() {
    const token = localStorage.getItem("token")    
    return (
      <div>
        {token ? <div>HOMEPAGE</div> : <LoginPage/>}  
      </div>
    )
  }
}

export default HomePage
