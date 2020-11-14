//run using cmd node server.js
//runs on localhost:3030

const { query } = require('express');
const mysql = require('mysql');
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

//basic search
function coreSearch(searchTerm) {
  my_query = `SELECT * FROM item WHERE itemName LIKE '%${searchTerm}%' 
    OR itemID = '${searchTerm}' 
    OR series LIKE '%${searchTerm}%' 
    OR modelNumber = '${searchTerm}' ;` ;

    return contactDB(my_query)
}

function advSearch(searchTerm) {
  
}

function contactDB(some_query){

  return new Promise((resolve, reject) => {
    connection.query(some_query, function (error, result) {
      // error will be an Error if one occurred during the query
      // result will contain the results of the query 
      if(error) reject(error);
      resolve(result);
      //console.log(result[0].itemName); way to pull a column val out of result
    });
  })

}

//functions must be listed here in order to be referenced from index
exports.coreSearch = coreSearch;
