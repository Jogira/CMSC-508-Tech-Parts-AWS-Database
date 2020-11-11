const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static('static'))

app.use(express.urlencoded({
    extended: true
}))

/*
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'database508.cdhunuqsahtr.us-east-1.rds.amazonaws.com',
  user     : 'amd',
  password : 'poyopoyo7',
  database : 'CMSC508_Project'
});
*/ 


app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { title: 'heyhey', message: 'Hello there!' })
})

app.post('/results', function (req, res) {
    const search_query = req.body.user_query
    console.log(search_query)

    res.render('index', { title: 'heyhey', message: `you searched ${search_query}` })
})

module.exports = app;