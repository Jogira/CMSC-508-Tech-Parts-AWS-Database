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

  vendor_query = `SELECT DISTINCT companyName FROM item JOIN stock, warehouses, vendor 
  WHERE item.itemID = stock.itemID 
  AND warehouses.warehouseID = stock.warehouseID 
  AND warehouses.URL = vendor.url ; `;

  manu_query = `SELECT DISTINCT manufacturer FROM item; `;

  type_query = 'SELECT DISTINCT category FROM item;';

  vendor_list = await queryDB(vendor_query);
  manu_list = await queryDB(manu_query);
  type_list = await queryDB(type_query);

  values = [vendor_list, manu_list, type_list];
  console.log(values);

  return values;
}

//basic search
async function coreSearch(searchTerm) {
  my_query = `SELECT itemID FROM item WHERE itemName LIKE '%${searchTerm}%' 
    OR itemID = '${searchTerm}' 
    OR series LIKE '%${searchTerm}%' 
    OR modelNumber = '${searchTerm}' ;`;


  itemID_arr = await queryDB(my_query) ; 
  console.log(itemID_arr); 
  return formatResults(itemID_arr);
 }

async function advSearch(searchTerm, selected_vendor, selected_manufacturer, selected_type, where_suffix) {

  var category_tbl, category_join ; //name of category table, needed for joins to get category specific attributes
  //format : "join [the table name] " 

  if(selected_type == "CPU"){
    category_tbl = "CPU"
    category_join = "join CPU "


  }else{
    category_tbl = selected_type.toLowerCase();
    category_join = "join " + category_tbl ; 
  }

  //  if(where_suffix !== ''){ //if there are attributes needed to be included in search 
  //   where_suffix = "AND " + where_suffix ; 
  // }
  
  if (!selected_manufacturer && !selected_type && !searchTerm) { //only have vendor
    my_query = `SELECT * FROM item JOIN stock, warehouses, vendor WHERE item.itemID = stock.itemID 
    AND stock.warehouseID = warehouses.warehouseID 
    AND warehouses.URL = vendor.URL AND vendor.companyName = '${selected_vendor}' `;

    console.log('a')

  } else if (!selected_vendor && !selected_type && !searchTerm) { //only have manu 

    my_query = `SELECT * FROM item WHERE manufacturer = '${selected_manufacturer}' `;
    console.log('b')


  } else if (!selected_vendor && !selected_manufacturer && !searchTerm) { // only have category
    
    my_query = `SELECT * FROM item ${category_join} WHERE category = '${selected_type}' ${where_suffix} `;
    console.log('c')


  } 
  else if (!selected_manufacturer && !selected_type) { //only have vendor and term

    my_query = `SELECT * FROM item JOIN stock, warehouses, vendor WHERE item.itemID = stock.itemID 
    AND stock.warehouseID = warehouses.warehouseID 
    AND warehouses.URL = vendor.URL AND vendor.companyName = '${selected_vendor}'
    AND ( itemName LIKE '%${searchTerm}%' 
        OR item.itemID = '${searchTerm}' 
        OR series LIKE '%${searchTerm}' 
        OR modelNumber = '${searchTerm}' ) `;
        
        console.log('g')


  } else if (!selected_vendor && !selected_type) { //only have manu and term

    my_query = `SELECT * FROM item WHERE manufacturer = ${selected_manufacturer}
    AND (itemName LIKE '%${searchTerm}%' 
    OR itemID = '${searchTerm}' 
    OR series LIKE '%${searchTerm}%' 
    OR modelNumber = '${searchTerm}') `;

    console.log('h')

  } else if (!selected_vendor && !selected_manufacturer) { //only have category and term

    my_query = `SELECT * FROM item ${category_join} WHERE category = ${selected_type}
    AND (itemName LIKE '%${searchTerm}%' 
    OR itemID = '${searchTerm}' 
    OR series LIKE '%${searchTerm}%' 
    OR modelNumber = '${searchTerm}') ${where_suffix} `

    console.log('i')

  } 
  else if (!selected_vendor) { //only have manu and category
    my_query = `SELECT * FROM item ${category_join} WHERE manufacturer = '${selected_manufacturer}'
    AND category = '${selected_type}' ${where_suffix}`;

    console.log('d')

  } else if (!selected_manufacturer) { //only have vendor and category

    my_query = `SELECT * FROM item JOIN stock, warehouses, vendor, ${category_tbl} WHERE item.itemID = stock.itemID 
    AND stock.warehouseID = warehouses.warehouseID 
    AND warehouses.URL = vendor.URL 
    AND vendor.companyName = '${selected_vendor}' 
    AND category = '${selected_type}' ${where_suffix} `;

    console.log('e')

  } else if (!selected_type) { //only have vendor and manu

    my_query = `SELECT * FROM item JOIN stock, warehouses, vendor WHERE item.itemID = stock.itemID 
    AND stock.warehouseID = warehouses.warehouseID 
    AND warehouses.URL = vendor.URL 
    AND vendor.companyName = '${selected_vendor}' 
    AND manufacturer = '${selected_manufacturer}' `;

    console.log('f')

  }
  else { //have all three
    my_query = `SELECT * FROM item JOIN stock, warehouses, vendor WHERE item.itemID = stock.itemID 
    AND stock.warehouseID = warehouses.warehouseID 
    AND warehouses.URL = vendor.URL 
    AND vendor.companyName = '${selected_vendor}' 
    AND manufacturer = '${selected_manufacturer}' 
    AND category = '${selected_type}' ${where_suffix}` ;

    console.log('j')

  }

  

  console.log(my_query); 
  //return queryDB(my_query)
  itemID_arr = await queryDB(my_query) ; 
  //console.log(itemID_arr); 
  //return formatResults(itemID_arr);
  return itemID_arr;
}

//server.query
function queryDB(some_query) {
  console.log(some_query)
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

async function formatResults(itemID_arr) {
  if(itemID_arr.length == 1){
    my_query = `SELECT * FROM simpleItemView WHERE itemID = ${itemID_arr[0].itemID} ; ` ;
    console.log("format query = " + my_query); 
    return await queryDB(my_query) ; 
  }

  var final_arr = []; 
  for(id of itemID_arr){
    my_query = `SELECT * FROM simpleItemView WHERE itemID = ${id.itemID} ; ` ;
    //console.log("format query = " + my_query); 
    var res = await queryDB(my_query);
    console.log(...res)
    final_arr.push( ...res ) ; 
  }

  //console.log("format arr " + final_arr);

  return final_arr ; 
}
//functions must be listed here in order to be referenced from client
exports.coreSearch = coreSearch;
exports.advSearch = advSearch;
exports.loadMenus = loadMenus; 
exports.query = queryDB;
exports.formatResults = formatResults;