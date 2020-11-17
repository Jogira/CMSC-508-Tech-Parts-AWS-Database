//run using cmd node server.js
//runs on localhost:3030

const e = require('express');
const { query } = require('express');
const mysql = require('mysql');
const { search } = require('./index');
const app = require('./index');
const port = 3030;

var connection = mysql.createConnection({
  host: 'database508.cdhunuqsahtr.us-east-1.rds.amazonaws.com',
  user: 'amd',
  password: 'poyopoyo7',
  database: 'CMSC508_Project'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

//populates all dropdown menus, returns a 2d array of values 
async function loadMenus() {

  //TODO: Order each query by alphabetical order 

  vendor_query = `SELECT DISTINCT companyName FROM item JOIN stock, warehouses, vendor 
  WHERE item.itemID = stock.itemID 
  AND warehouses.warehouseID = stock.warehouseID 
  AND warehouses.URL = vendor.url ; `;

  manu_query = `SELECT DISTINCT manufacturer FROM item; `;

  type_query = 'SELECT DISTINCT category FROM item;';

  vendor_list = await queryDB(vendor_query);
  manu_list = await queryDB(manu_query);
  type_list = await queryDB(type_query);

  //console.log(vendor_list);
  //console.log(manu_list);
  //console.log(type_list);

  values = [vendor_list, manu_list, type_list];
  //console.log(values);

  return values;
}

//basic search
function coreSearch(searchTerm) {
  my_query = `SELECT * FROM item WHERE itemName LIKE '%${searchTerm}%' 
    OR itemID = '${searchTerm}' 
    OR series LIKE '%${searchTerm}%' 
    OR modelNumber = '${searchTerm}' ;`;


  return queryDB(my_query)
}

function advSearch(searchTerm, selected_vendor, selected_manufacturer, selected_type) {

  if (!selected_manufacturer && !selected_type && !searchTerm) { //only have vendor
    my_query = `SELECT * FROM item JOIN stock, warehouses, vendor WHERE item.itemID = stock.itemID 
    AND stock.warehouseID = warehouses.warehouseID 
    AND warehouses.URL = vendor.URL AND vendor.companyName = '${selected_vendor}' ;`;

  } else if (!selected_vendor && !selected_type && !searchTerm) { //only have manu 

    my_query = `SELECT * FROM item WHERE manufacturer = '${selected_manufacturer}' ; `;

  } else if (!selected_vendor && !selected_manufacturer && !searchTerm) { // only have category

    my_query = `SELECT * FROM item WHERE category = '${selected_type}' ;`;

  } else if (!selected_vendor) { //only have manu and type
    my_query = `SELECT * FROM item WHERE manufacturer = '${selected_manufacturer}'
    AND category = '${selected_type}' ; `;

  } else if (!selected_manufacturer) { //only have vendor and type

    my_query = `SELECT * FROM item JOIN stock, warehouses, vendor WHERE item.itemID = stock.itemID 
    AND stock.warehouseID = warehouses.warehouseID 
    AND warehouses.URL = vendor.URL 
    AND vendor.companyName = '${selected_vendor}' 
    AND category = '${selected_type}' ;`;

  } else if (!selected_type) { //only have vendor and manu

    my_query = `SELECT * FROM item JOIN stock, warehouses, vendor WHERE item.itemID = stock.itemID 
    AND stock.warehouseID = warehouses.warehouseID 
    AND warehouses.URL = vendor.URL 
    AND vendor.companyName = '${selected_vendor}' 
    AND manufacturer = '${selected_manufacturer}' ;`;

  }
  else if (!selected_manufacturer && !selected_type) { //only have vendor and term

    my_query = `SELECT * FROM item JOIN stock, warehouses, vendor WHERE item.itemID = stock.itemID 
    AND stock.warehouseID = warehouses.warehouseID 
    AND warehouses.URL = vendor.URL AND vendor.companyName = '${selected_vendor}'
    AND ( itemName LIKE '%${searchTerm}%' 
        OR item.itemID = '${searchTerm}' 
        OR series LIKE '%${searchTerm}' 
        OR modelNumber = '${searchTerm}' ) ;`;

  } else if (!selected_vendor && !selected_type) { //only have manu and term

    my_query = `SELECT * FROM item WHERE manufacturer = ${selected_manufacturer}
    AND (itemName LIKE '%${searchTerm}%' 
    OR itemID = '${searchTerm}' 
    OR series LIKE '%${searchTerm}%' 
    OR modelNumber = '${searchTerm}') ;`;

  } else if (!selected_vendor && !selected_manufacturer) { //only have type and term

    my_query = `SELECT * FROM item WHERE category = ${selected_type}
    AND (itemName LIKE '%${searchTerm}%' 
    OR itemID = '${searchTerm}' 
    OR series LIKE '%${searchTerm}%' 
    OR modelNumber = '${searchTerm}') ;`

  } else {
    my_query = `SELECT * FROM item JOIN stock, warehouses, vendor WHERE item.itemID = stock.itemID 
    AND stock.warehouseID = warehouses.warehouseID 
    AND warehouses.URL = vendor.URL 
    AND vendor.companyName = '${selected_vendor}' 
    AND manufacturer = '${selected_manufacturer}' 
    AND category = '${selected_type}';`;
  }

  return queryDB(my_query)

}

function queryDB(some_query) {

  return new Promise((resolve, reject) => {
    connection.query(some_query, function (error, result) {
      // error will be an Error if one occurred during the query
      // result will contain the results of the query 
      if (error) reject(error);
      resolve(result);
      //console.log(result[0].itemName); way to pull a column val out of result
    });
  })

}

//functions must be listed here in order to be referenced from client
exports.coreSearch = coreSearch;
exports.advSearch = advSearch;
exports.loadMenus = loadMenus; 
