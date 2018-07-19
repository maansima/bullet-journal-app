import "./signup-page.css"
import * as React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import Navigation from "../navigation/navigation"


const SIGNUP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $name: String!
    $username: String!
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      username: $username
    ) {
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

class SignUp extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    username: ""
  }

  render() {
    return (
      <div>
        {/* <Navigation history={this.props.history} /> */}
        {/* <img src={logo} className="App-logo" alt={"logo"} /> */}
        <Navigation/>
        <Mutation mutation={SIGNUP}>
          {(signup, {error }) => {
            if (error) {
                return (
                  <div className="error">
                    That email and/or username is already in use.{" "}
                    <a href="/signup"><b> Sign up again</b></a> or{" "}
                    <a href="/login"> <b>login.</b></a>
                  </div>
                )
              }
            return (
              <div className="signup-container">
                <div className="signup-form">
                  <form
                    onSubmit={async e => {
                      e.preventDefault()
                      try {
                        const { data } = await signup({
                          variables: {
                            email: this.state.email,
                            name: this.state.name,
                            password: this.state.password,
                            username: this.state.username
                          }
                        })
                        localStorage.setItem("token", data.signup.token)
                        this.props.history.push(`/myprofile`)
                      } catch (error) {
                        localStorage.removeItem("token")
                      }
                    }}
                  >
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        onChange={e => this.setState({ name: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="username"
                        placeholder="Username"
                        onChange={e =>
                          this.setState({ username: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="Password"
                        onChange={e =>
                          this.setState({ password: e.target.value })}
                      />
                    </div>
                    <p />
                    <button type="submit" className="signup">
                      Sign Up
                    </button>
                    <p />
                    <p />
               <a href="/login">
                 Already have an account? Login!<p/>
               </a>
                  </form>
                </div>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default SignUp
