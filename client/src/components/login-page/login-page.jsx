import * as React from "react"
import { Mutation } from "react-apollo"
import { Link } from "react-router-dom"
import gql from "graphql-tag"
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

    // this.props.history.push("/login")
  }

  render() {
    const token = localStorage.getItem("token")
    return (
      <div>
        <header className="bullet-logo">Bullet</header>
        <Mutation mutation={LOGIN}>
          {login => {
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
                      this.props.history.push(`/${data.login.user.username}`)
                    } catch (error) {
                      localStorage.removeItem("token")
                      localStorage.removeItem("user")
                    }
                  }}
                >
                  <input
                    type="text"
                    placeholder="email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <input
                    type="password"
                    placeholder="password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </form>
                <button type="submit" className="loginbutton">
                  Login
                </button>
                <p />
                <Link className="signuplink" to="/signup">
                  Don't have an account? Sign Up!
                </Link>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default LoginPage
