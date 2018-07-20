import "./navigation.css"
import * as React from "react"
import { Mutation } from "react-apollo"
import { Link } from "react-router-dom"
import gql from "graphql-tag"
import logo from "./logo.png"

const LOGIN = gql`
 mutation login($email: String!, $password: String!) {
   login(email: $email, password: $password) {
     token
     user {
       id
       name
       email
       username
     }
   }
 }
`

class LoginPage extends React.Component {
 state = {
   email: "",
   password: ""
 }

 onLogout = () => {
   localStorage.removeItem("token")
   window.location.replace("http://localhost:3001/")

   // this.props.history.push(“/login”)
 }

 render() {
   const token = localStorage.getItem("token")
   return (
     <div className="navigation header">
        <header className="bullet-logo"><a href="/">
        <img src={logo} width="60px"/>
        Bullet</a></header>
        <div className="logoutbutton">
          {token ? (
            <button onClick={this.onLogout} className="logout-button" >logout</button>
          ) : (
            <Link to="/login" className="login">
              login
            </Link>
          )}
        </div>
     </div>
   )
 }
}

export default LoginPage