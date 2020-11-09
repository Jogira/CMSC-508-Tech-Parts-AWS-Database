const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static('static'))

app.use(express.urlencoded({
    extended: true
}))

/*var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
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