import "./signup-page.css"
import * as React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

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
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt={"logo"} /> */}
          <h1 className="App-title">Bullet Journal</h1>
          <Mutation mutation={SIGNUP}>
            {signup => {
              return (
                <div className="login-form">
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
                        placeholder="email"
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="password"
                        onChange={e =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <input
                        placeholder="name"
                        onChange={e => this.setState({ name: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="username"
                        placeholder="username"
                        onChange={e =>
                          this.setState({ username: e.target.value })
                        }
                      />
                    </div>
                    <button type="submit">SIGNUP!</button>
                  </form>
                </div>
              )
            }}
          </Mutation>
        </header>
      </div>
    )
  }
}

export default SignUp
