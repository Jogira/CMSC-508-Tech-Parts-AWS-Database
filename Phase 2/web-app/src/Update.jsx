import React, { Component } from "react"
import axios from "axios";
import UserStore from "./UserStore.js";
import { observer } from 'mobx-react'
export default class Update extends Component {


   login() {
     //UserStore.reset();
     alert("LOGIN FUNCITON")
    var a = document.getElementById("userBox").value;
    var b = document.getElementById("passBox").value;
    var legit = UserStore.verifyCred(a, b)
    legit = (a == "1234") && (b == '1234')
    alert("legit: " + legit)
    if(legit) {
        alert("LOGGED IN")
    }
    else {
        alert("Incorrect Credentials")
    }
    return (legit)
  }
    render() {


if(UserStore.isLoggedIn) {
  alert("Update Log")
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

                <div class="main-container">
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
                                    </select>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
      alert("Update Unlog")
      //UserStore.firstLoad();
      return(

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

          <form>
          <label for="user">Username:</label>
          <input type="text" id="userBox" name="user" defaultvalue = ''/><br></br>
          <label for="pass">Password:</label>
          <input type="text" id="passBox" name="pass" defaultvalue = ''/><br></br>
          <button type="submit" onClick={function(){alert("LOGIN Button")
         var a = document.getElementById("userBox").value
         var b = document.getElementById("passBox").value
         var legit = UserStore.verifyCred(a, b)
       alert("User: " + legit)}}>Submit</button>
          </form>
          </div>


    )}
}
}
