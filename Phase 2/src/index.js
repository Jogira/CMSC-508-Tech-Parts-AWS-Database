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
    for (vendor of menu_data[0]) {
        vendor_list.push(vendor.companyName);
    }

    var manu_list = [];
    for (manu of menu_data[1]) {
        manu_list.push(manu.manufacturer);
    }

    var category_list = [];
    for (type of menu_data[2]) {
        category_list.push(type.category);
    }

    res.render('index', { title: 'Electronics DB', vendors: vendor_list, manufacturers: manu_list, categories: category_list })
})

//accepts post from main search bar on home pg
app.post('/results', async function (req, res) {
    var search_query = req.body.user_query;

    var selected_vendor = req.body.vendor;
    var selected_manufacturer = req.body.manu;
    var selected_type = req.body.type;

    console.log(search_query)
    console.log(selected_vendor)
    console.log(selected_manufacturer)
    console.log(selected_type)


    //case where nothing is selected from dropdown
    if (selected_vendor == 'Select' && selected_manufacturer == 'Select' && selected_type == 'Select') {
        results = await server.coreSearch(search_query);
        res.render('results', { title: 'Search Results', message: `You searched: \n query: ${search_query} vendor: ${selected_vendor}, manu: ${selected_manufacturer}, category: ${selected_type}`, 
    search_results: `Your results are: ${JSON.stringify(results)}` }) ; 
        return;
    }
    if (selected_vendor == 'Select') {
        selected_vendor = null;
    }
    if (selected_manufacturer == 'Select') {
        selected_manufacturer = null;
    }
    if (selected_type == 'Select') {
        selected_type = null;
    }
    if (search_query == '') {
        search_query = null;
    }
    //TODO: may want to put selected values in a object
    results = await server.advSearch(search_query, selected_vendor, selected_manufacturer, selected_type);
    console.log("adv results: ")
    console.log(results)


    // server.coreSearch(search_query).then((results) => {
    //     // this will run after it is done
    // }).catch(err => console.error(err));

    //TODO: loop through results arr to parse and format
    //for (result in results){   
    //}

    res.render('results', { title: 'Search Results', message: `You searched: \n query: ${search_query} vendor: ${selected_vendor}, manu: ${selected_manufacturer}, category: ${selected_type}`, 
    search_results: `Matches for: ${JSON.stringify(results)}` , results: results})
})

app.get('/update', function (req, res) {
    res.render('update', { title: 'Update DB', message: 'This aint finished yet' })
})

module.exports = app;