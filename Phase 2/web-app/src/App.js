import logo from './logo.svg';
import Home from "./Home";
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Update from './Update';
import React, {useState, useEffect} from "react";
import Axios from 'axios'
import Login from './Login'



function App() {
  const [itemID, setItemID] = useState('')
  const [itemName, setItemName] = useState('')
  const [category, setCategory] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [series, setSeries] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [modelNumber, setModelNumber] = useState('')


const submitItem = () =>
{
  Axios.post('http://localhost:3030/update', {
    itemID: itemID,
    itemName: itemName,
    category: category,
    manufacturer: manufacturer,
    series: series,
    releaseDate: releaseDate,
    modelNumber: modelNumber,
  }).then(() => {
    alert("Successfully added item.");
  });
};

  return (
    <Router>
      <div>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/update">

          <Update/>
          <h1> Enter all of the information about what item you want to add.</h1>
          <div className="form">
            <label>Item ID:</label>
            <input type="text" name="itemID" onChange={(e) => {
              setItemID(e.target.value)
            }}/>
            <br></br>
            <label>Item Name:</label>
            <input type="text" name="itemName" onChange={(e) => {
              setItemName(e.target.value)
            }}/>
                        <br></br>
            <label>Category:</label>
            <input type="text" name="category" onChange={(e) => {
              setCategory(e.target.value)
            }}/>
                        <br></br>
            <label>Manufacturer:</label>
            <input type="text" name="manufacturer" onChange={(e) => {
              setManufacturer(e.target.value)
            }}/>
                        <br></br>
            <label>Series:</label>
            <input type="text" name="series" onChange={(e) => {
              setSeries(e.target.value)
            }}/>
                        <br></br>
            <label>Release date:</label>
            <input type="text" name="releaseDate" onChange={(e) => {
              setReleaseDate(e.target.value)
            }}/>
                        <br></br>
            <label>Model Number:</label>
            <input type="text" name="modelNumber" onChange={(e) => {
              setModelNumber(e.target.value)
            }}/>
          </div>
          <button onClick={submitItem}>SUBMIT</button>
        </Route>
      </div>
    </Router>
  );
}

export default App;
