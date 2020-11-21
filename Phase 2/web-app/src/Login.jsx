import React, { Component } from "react"
import axios from "axios";

export default class Login extends Component {

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
            //document.write("Welcome, you logged in.");
            //instead redirect to update pg 
        }
        else {
            //window.open("wrong.html");

        }

    }

        render() {
            return (
                <div>

                    Username: <input type="text" name="username" onChange={e => this.updateUser(e)} /><br /><br />
                    Password: <input type="password" name="pwd" onChange={e => this.updatePass(e)} /><br /><br />
                    <input type="button" value="Log In" onClick={e => this.checkCreds()} />


                </div>
            )
        }
    }