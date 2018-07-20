import * as React from "react"
import { Mutation } from "react-apollo"
import { Link } from "react-router-dom"
import gql from "graphql-tag"
import Navigation from "../navigation/navigation"
import "./login-page.css"

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
     <div>
       <Navigation/>
       <Mutation mutation={LOGIN}>
         {(login, {error }) => {
           if (error) {
            return (
                  <div className="login-container">
                    Oops, invalid email and/or password.
                    {"\n"}
                    <a href="/login" className="loginlink"><b>Login again</b></a> or
                    <a href="/signup" className="signuplink"><b>Sign up.</b></a>
                    
                  </div>
                )
           }
           return (
             <div className="login-container">
               <form
                 onSubmit={async e => {
                   e.preventDefault()
                   try {
                     const { data } = await login({
                       variables: {
                         email: this.state.email,
                         password: this.state.password
                       }
                     })
                     localStorage.setItem("token", data.login.token)
                     localStorage.setItem(
                       "user",
                       JSON.stringify(data.login.user)
                     )
                     this.props.history.push(`/themetwo`)
                   } catch (error) {
                     localStorage.removeItem("token")
                     localStorage.removeItem("user")
                   }
                 }}
               >
               <div className="containers">
                 <p/>
               You're not currently signed in. <br/>Login or
               <Link className="signuplink" to="/signup">
                 <b>sign up</b> to view your bullet dashboard.
               </Link>
               <div>
                 <input
                   type="text"
                   placeholder="email"
                   onChange={e => this.setState({ email: e.target.value })}
                 />
                 </div>
                 <div>
                 <input
                   type="password"
                   placeholder="password"
                   onChange={e => this.setState({ password: e.target.value })}
                 />
                 </div>
              </div>
               <button type="submit" className="loginbutton">
                 Login
               </button>
               </form>
             </div>
           )
         }}
       </Mutation>
     </div>
   )
 }
}

export default LoginPage