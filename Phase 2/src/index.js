const express = require('express');
const path = require('path');
const app = express();
const server = require('./server')

app.use('/static', express.static('static'))

app.use(express.urlencoded({
    extended: true
}))

app.set('view engine', 'pug')

app.get('/', async function (req, res) {
    
    menu_data = await server.loadMenus();

    var vendor_list = []; 
    for (vendor of menu_data[0]){
        vendor_list.push(vendor.companyName);
    }

    var manu_list = [];
    for(manu of menu_data[1]){
        manu_list.push(manu.manufacturer);
    }

    var category_list = [];
    for(type of menu_data[2]){
        category_list.push(type.category);
    }

    res.render('index', { title: 'Electronics DB', message: 'hewwo world', vendors: vendor_list, manufacturers: manu_list, categories: category_list })
})

//accepts post from main search bar on home pg
app.post('/results', async function (req, res) {
    var search_query = req.body.user_query 
    console.log(search_query)
    
    results = await server.coreSearch(search_query); 

    console.log(results);

    // server.coreSearch(search_query).then((results) => {
    //     // this will run after it is done
    // }).catch(err => console.error(err));

    //TODO: loop through results arr to parse and format
    //for (result in results){   
    //}
    
    res.render('index', { title: 'Search Results', message: `You searched ${search_query}`, search_results: `Your results are: ${JSON.stringify(results)}` })
})

app.get('/admin', function (req, res) {
    res.render('admin', { title: 'Admin', message: 'this aint finished yet' })
})

module.exports = app;