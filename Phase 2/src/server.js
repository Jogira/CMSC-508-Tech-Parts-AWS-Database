//run using cmd node server.js
//runs on localhost:3030

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'database508.cdhunuqsahtr.us-east-1.rds.amazonaws.com',
  user     : 'amd',
  password : 'poyopoyo7',
  database : 'CMSC508_Project'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//query database and return result
connection.query("SELECT * FROM CPU WHERE itemID =  5001", function (error, result) {
    // error will be an Error if one occurred during the query
    // result will contain the results of the query 
    console.log(result);
    console.log(result[0].chipset); //can loop result arr if expecting more than one item returned
  });

const app = require('./index');
const port = 3030;

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});

