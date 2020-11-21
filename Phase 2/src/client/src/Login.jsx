import React, { Component } from "react"
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Login extends Component {

    constructor() {
        super();
        this.state = {}
    }

    updateUser(e) {
        this.setState({ user: e.target.value });
    }

    updatePass(e) {
        this.setState({ pass: e.target.value });
    }

    checkCreds() {
        var user = this.state.user;
        var pass = this.state.pass;

        var user1 = "admin"
        var pass1 = "password"

        if (user == user1 && pass == pass1) {
            this.setState({login: true})
        }
    }

        render() {
            return (
                <div>

                    Username: <input type="text" name="username" onChange={e => this.updateUser(e)} /><br /><br />
                    Password: <input type="password" name="pwd" onChange={e => this.updatePass(e)} /><br /><br />
                    <input type="button" value="Log In" onClick={e => this.checkCreds()} />
                    {this.state.login ? <Redirect to="/update"/> : null}

                </div>
            )
        }
    }