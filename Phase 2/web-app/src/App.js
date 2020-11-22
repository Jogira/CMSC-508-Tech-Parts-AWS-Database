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
  const[itemToDelete, setItemToDelete] = useState('')

  const[itemToUpdate, setItemToUpdate] = useState('')
  const[upSaleStatus, updateUpSaleStatus] = useState('')
  const[upShippingPrice, updateUpShippingPrice] = useState('')
  const[upCount, updateUpCount] = useState('')
  const[upPrice, updateUpPrice] = useState('')

const submitItem = () =>
{
  //Axios.post('http://ec2-3-82-116-155.compute-1.amazonaws.com:3030/update', {
  Axios.post('http://localhost:3030/add', {
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

const deleteItem = () =>
{
  //Axios.post('http://ec2-3-82-116-155.compute-1.amazonaws.com:3030/update', {
  Axios.post('http://localhost:3030/delete', {
    itemToDelete: itemToDelete,
  }).then(() => {
    alert("Successfully deleted item.");
  });
};


const updateItem = () =>
{
  //Axios.post('http://ec2-3-82-116-155.compute-1.amazonaws.com:3030/update', {
  Axios.post('http://localhost:3030/update', {
    itemToUpdate: itemToUpdate,
    upSaleStatus: upSaleStatus,
    upShippingPrice: upShippingPrice,
    upCount: upCount,
    upPrice: upPrice,
  }).then(() => {
    alert("Successfully upated item.");
  });
};

async function firstLoad() {
  if(UserStore.username == null || UserStore.password == null) {
    UserStore.username ='';
    UserStore.password = '';
    UserStore.isLoggedIn = false;
    UserStore.save();
  }
}


async function login() {
  var a = document.getElementById("userBox").value;
  var b = document.getElementById("passBox").value;
  if(a === "1234" && b === "1234") {
    alert("LOGGED IN")
    UserStore.username = a;
    UserStore.password = b;
    UserStore.isLoggedIn = true;
    UserStore.save();
  } else {
    alert("Incorrect Credentials")
    UserStore.username = '';
    UserStore.password = '';
    UserStore.isLoggedIn = false;
    UserStore.save();
  }
}

firstLoad()
//alert(UserStore.isLoggedIn)


if((UserStore.username == "1234") && (UserStore.password = "1234")) {
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
          <br></br>
          <br></br>
          <br></br>
          <h1> Enter the item ID of what product you'd like to delete.</h1>
          
          <br></br>
          <label>Item ID:</label>
            <input type="text" name="itemToDelete" onChange={(e) => {
              setItemToDelete(e.target.value)
            }}/> 
          <button onClick={deleteItem}>DELETE</button>

          <br></br>
          <h1> Enter the item ID of an existing product you'd like to update.</h1>
          
          <br></br>
          <label>Item ID:</label>
            <input type="text" name="itemToDelete" onChange={(e) => {
              setItemToUpdate(e.target.value)
            }}/> 
                      <br></br>
            <label>Update current price:</label>
            <input type="text" name="upUpPrice" onChange={(e) => {
              updateUpPrice(e.target.value)
            }}/> 
                      <br></br>
            <label>Update sale status:</label>
            <input type="text" name="upSaleStatus" onChange={(e) => {
              updateUpSaleStatus(e.target.value)
            }}/> 
          <br></br>
            <label>Update shipping costs:</label>
            <input type="text" name="upShippingPrice" onChange={(e) => {
              updateUpShippingPrice(e.target.value)
            }}/> 
          <br></br>
            <label>Update amount in stock:</label>
            <input type="text" name="upCount" onChange={(e) => {
              updateUpCount(e.target.value)
            }}/> 
                      <br></br>
          <button onClick={updateItem}>UPDATE</button>
        </Route>
      </div>
    </Router>
  );
}
else {
  return(
  /*https://www.w3schools.com/tags/tag_input.asp
    https://www.w3schools.com/jsref/event_onclick.asp*/
  <form>
  <label for="user">Username:</label>
  <input type="text" id="userBox" name="user"/><br></br>
  <label for="pass">Password:</label>
  <input type="text" id="passBox" name="pass"/><br></br>
  <button onClick={() => login()}>Enter</button>
  </form>
)}
}

export default App;

