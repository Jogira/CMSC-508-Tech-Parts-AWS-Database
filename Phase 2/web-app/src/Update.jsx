import React, { Component } from "react"
import axios from "axios";
import UserStore from "./UserStore.js";
import { observer } from 'mobx-react'
export default class Update extends Component {


    render() {

if((UserStore.username == "1234") && (UserStore.password=="1234")) {
  //alert("Update Log")
        return (
            <div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="#">💻📱🖥</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="/update">Update<span class="sr-only">(current)</span></a></li>
                                <button type="submit" onClick={function(){
                                UserStore.username='';
                                UserStore.password='';
                                UserStore.verifyCred('', '');
                                window.location.reload();
                              }}>Logout</button>
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
      /*https://www.w3schools.com/tags/tag_input.asp
  https://www.w3schools.com/jsref/event_onclick.asp*/

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
          <button type="submit" onClick={function(){
         var a = document.getElementById("userBox").value
         var b = document.getElementById("passBox").value
         var legit = UserStore.verifyCred(a, b);
         if(legit) {
           alert("Logged In Successfully");
         }
         else {
           alert("Login Unsuccessful");
         }
       }}>Submit</button>
          </form>
          </div>


    )}
}
}
