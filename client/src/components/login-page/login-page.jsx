import "./login-page/login-page.css"

class LoginPage extends React.Component {
    state = {
        email: "",
        password: ""
    }

    render() {
        return (
            <div>
                <Navigation history={this.props.history} />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt={"logo"} />
                    <h1 className="App-title">TWEETER</h1>
                <div className="login-form">
                    <Mutation mutation={LOGIN}>
                        {login => {
                            return (
                                <form
                                    onSubmit={async e => {
                                        e.preventDefault()
                                        //WHATEVER YOU DO HERE, is run when you submit the form
                                        const { data } = await login({
                                            variables: {
                                                email: this.state.email,
                                                password: this.state.password
                                            }
                                        })
                                        localStorage.setItem("token", data.login.token)
                                        this.props.history.push("/")
                                    }}
                                >
                                    <div class="boxes">
                                        <div>
                                            <input
                                            type="text"
                                            onChange={e => {
                                                this.setState({
                                                    email: e.target.value
                                                })
                                            }}
                                            placeholder="email"
                                        />
                                        </div>
                                        <div>
                                        <input
                                            type="password"
                                            onChange={e => {
                                                this.setState({
                                                    password: e.target.value
                                                })
                                            }}
                                            placeholder="password"
                                        />
                                        </div>
                                    </div>
                                    <button type="submit">LOGIN </button>
                                </form>
                            )
                        }}
                    </Mutation>
                </div>
                </header>
            </div>
        )
    }
}

export default LoginPage