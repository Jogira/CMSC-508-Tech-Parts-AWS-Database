import React, { Component } from "react"
import axios from "axios";
import UserStore from "./UserStore.js";
import { observer } from 'mobx-react'
export default class Update extends Component {



async login() {
  var a = document.getElementById("userBox").value;
  var b = document.getElementById("passBox").value;
  if(a === "1234" && b === "1234") {
    UserStore.username = a;
    UserStore.password = b;
    UserStore.isLoggedIn = true;
  } else {
    UserStore.username = '';
    UserStore.password = '';
    UserStore.isLoggedIn = false;
  }
}
/*async componentDidMount() {
  try {
    let res = await fetch ('isLoggedIn', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      }
    });
    let result = await res.json();
    if(result && result.success) {
      UserStore.loading = false;
      UserStore.isLoggedIn = true;
      UserStore.username = result.username;
    }
    else{
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
    }
    catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch ('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        }
      });
      let result = await res.json();
      if(result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
      }
      catch (e) {
        console.log(e)
      }
    }*/

    render() {
      /*
      if(UserStore.loading) {
        return (
          <div className="app">
          <div className="container">
          Loading, Please Wait...
          </div>
          </div>
        );
      } else {
        if(UserStore.isLoggedIn) {
          return (
            <div className="app">
            <div className="container">
            Welcome {UserStore.username}
            <submitButton text={'Log out'}
            disabled={this.props.disabled}
             onClick={() => this.logout()}
            />
            </div>
            </div>
          );
        }

      else {
        return (
          <div className="app">
          <div className="container">
          <div className = "inputField">
            <input
            className = 'input'
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={ (e) => this.props.onChange(e.target.value)}
            />
        </div>

          Welcome {UserStore.username}
          <div className="submitButton"> </div> <button text={'Log In'}
          disabled={this.props.disabled}
           onClick={() => this.logout()}
          />
          </div>
          </div>
        );
      }
    }
      return(
      <div className="app">
        <div className='container'>
        <div className="loginForm">

        </div>
        </div>
        </div>
    )*/
if(UserStore.isLoggedIn) {
        return (
            <div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="#">💻📱🖥</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="/update">Update<span class="sr-only">(current)</span></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* <div class="main-container">
                    <div class="options-container">
                            <div class="form-group">
                                <label for="item_field">New Product Name:</label>
                                <input id="item_field" type="text" name="item_field" />
                            </div>
                            <div class="form-group">
                                <label for="vendor_field">Vendor: </label>
                                <input id="vendor_field" type="text" name="vendor_field" />
                            </div>
                            <div class="form-group">
                                <label for="manu_field">Manufacturer:</label>
                                        <input id="manu_field" type="text" name="manu_field" />
                            </div>
                            <div class="form-group">
                                <label for="date_field">Release Date:</label>
                                        <input id="item_field" type="date" name="item_field" />
                            </div>
                            <div class="form-group">
                                <label for="type_menu">Item Type:</label>
                                <div>
                                    <select id="type_menu" name="type">
                                        <option>Select</option>
                                        {/* more options here */}
                                    {/*</select>
                                </div>
                            </div>
                    </div>
                </div> */}
            </div>
        )
    }
    else {
      return(
      /*https://www.w3schools.com/tags/tag_input.asp*/
      <form>
      <label for="user">Username:</label>
      <input type="text" id="userBox" name="user"/><br></br>
      <label for="pass">Password:</label>
      <input type="text" id="passBox" name="pass"/><br></br>
      /*https://www.w3schools.com/jsref/event_onclick.asp*/
      <button onclick='login()'>Enter</button>
      </form>
    )}
}
}
