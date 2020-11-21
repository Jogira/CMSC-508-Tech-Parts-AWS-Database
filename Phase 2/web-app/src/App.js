import logo from './logo.svg';
import Home from "./Home";
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Update from './Update';
import React, {useState, useEffect} from "react";
import Axios from 'axios'
import UserStore from "./UserStore.js";
import Login from "./Login";



function App() {
  const [itemID, setItemID] = useState('')
  const [itemName, setItemName] = useState('')
  const [category, setCategory] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [series, setSeries] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [modelNumber, setModelNumber] = useState('')

    //Item stock
  const [warehouseID, setwarehouseID] = useState('')
  const [count, setCount] = useState('')
  const [currentPrice, setCurrentPrice] = useState('')
  const [historicalLow, setHistoricalLow] = useState('')
  const [historicalHigh, setHistoricalHigh] = useState('')
  const [saleStatus, setSaleStatus] = useState('')
  const [shippingPrice, setShippingPrice] = useState('')

const submitItem = () =>
{
  Axios.post('http://ec2-3-82-116-155.compute-1.amazonaws.com:3030/update', {
    itemID: itemID,
    itemName: itemName,
    category: category,
    manufacturer: manufacturer,
    series: series,
    releaseDate: releaseDate,
    modelNumber: modelNumber,

    //Warehouse stock data.
    warehouseID: warehouseID,
    count: count,
    currentPrice: currentPrice,
    historicalLow: historicalLow,
    historicalHigh: historicalHigh,
    saleStatus: saleStatus,
    shippingPrice: shippingPrice,
  }).then(() => {
    alert("Successfully added item.");
  });
};




async function login() {
  alert("app login")
  var a = document.getElementById("userBox").value;
  var b = document.getElementById("passBox").value;
  var legit = UserStore.verifyCred(a, b)
  if(legit) {
      alert("LOGGED IN")
  }
  else {
      alert("Incorrect Credentials")
  }
}

UserStore.firstLoad();

//alert(UserStore.isLoggedIn)

alert("App Log: " + UserStore.isLoggedIn)
if(UserStore.isLoggedIn) {

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
          <h1> Now enter information for the warehouse.</h1>
          <br></br>
            <label>Warehouse ID:</label>
            <input type="text" name="warehouseID" onChange={(e) => {
              setwarehouseID(e.target.value)
            }}/>
          <br></br>
            <label>Amount in stock:</label>
            <input type="text" name="count" onChange={(e) => {
              setCount(e.target.value)
            }}/>
          <br></br>
            <label>Current price:</label>
            <input type="text" name="currentPrice" onChange={(e) => {
              setCurrentPrice(e.target.value)
            }}/>
          <br></br>
            <label>Historical Low:</label>
            <input type="text" name="historicalLow" onChange={(e) => {
              setHistoricalLow(e.target.value)
            }}/>
          <br></br>
            <label>Historical High:</label>
            <input type="text" name="historicalHigh" onChange={(e) => {
              setHistoricalHigh(e.target.value)
            }}/>
          <br></br>
            <label>Sale status:</label>
            <input type="text" name="saleStatus" onChange={(e) => {
              setSaleStatus(e.target.value)
            }}/>
          <br></br>
            <label>Shipping costs:</label>
            <input type="text" name="shippingPrice" onChange={(e) => {
              setShippingPrice(e.target.value)
            }}/>
          </div>
          <button onClick={submitItem}>SUBMIT</button>
        </Route>
      </div>
    </Router>
  );
}
else {
  //alert("App Unlog")
  return(
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
          </Route>
        </div>
      </Router>


)}
}

export default App;
