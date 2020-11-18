const express = require('express');
const path = require('path');
const app = express();
const server = require('./server')
const cors = require('cors');

app.use(express.json());
app.use(cors())
/* app.use('/static', express.static('static'))

app.use(express.urlencoded({
    extended: true
}))

app.set('view engine', 'pug') */

/* app.get('/', async function (req, res) {

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
}) */

//accepts post from main search bar on home pg
/* app.post('/results', async function (req, res) {
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
        console.log(results);

        res.render('results', { title: 'Search Results', message: `You searched: \n query: ${search_query} vendor: ${selected_vendor}, 
        manu: ${selected_manufacturer}, category: ${selected_type}` }) ; 
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
results: results, search: search_query, vendor: selected_vendor, manufacturer: selected_manufacturer, type: selected_type, body: req.body})
})
 */

app.post('/filtered-results', async function (req, res){
    /* var orderby_suffix ; 
    var selected_filter = req.body.filter-menu ; 
    if(selected_filter = 'Select'){
        return; 
    }
    if(selected_filter = 'price-asc'){
        console.log('filter: ascending price') ; 

    } */

    console.log(req.body)
    

    res.send();
})

app.get('/update', async function (req, res) {

    menu_data = await server.loadMenus();

    var category_list = [];
    for (type of menu_data[2]) {
        category_list.push(type.category);
    }

    res.render('update', { title: 'Update DB', message: 'This aint finished yet', categories: category_list })
})


app.get('/test', async function (req, res) {
    result = await server.loadMenus();

    a = {
        company: result[0],
        manu: result[1],
        items: result[2]
    }

    res.send(a);
})

app.get('/test-result', async function (req, res) {
    
    result = await server.coreSearch()

    res.send(a);
})
app.post('/test-search', async function (req,res){
    var search_query = req.body.searchTerm ; 
    if (search_query == '') {
        search_query = null;
    }

    results = await server.coreSearch(search_query) ; 

    res.send(results)
    
});

app.post('/test-advsearch', async function (req, res) {
    
    console.log(req.body);

    var search_query, selected_vendor, selected_manufacturer, selected_type; 
    search_query = req.body.searchTerm ; 
    selected_vendor = req.body.vendor ;
    selected_manufacturer = req.body.manu ; 
    selected_type = req.body.item; 

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
/*     else{
        results = await server.coreSearch(search_query);
        console.log(results);
       
        res.send(results);
        return;
    } */


    results = await server.advSearch(search_query, selected_vendor, selected_manufacturer, selected_type);
    console.log("adv results: ")
    console.log(results)

    res.send(results);

})

app.get('/cpus', async function(req, res) {

    server.query('SELECT DISTINCT chipset, integratedGraphics, wattage FROM CPU').then(data => {
        res.send(data);
    }).catch(error => {
        console.log(error);
        res.send();
    })
})

app.get('/storage', async function(req, res) {

    server.query('SELECT DISTINCT * FROM storage').then(data => {
        res.send(data);
    }).catch(error => {
        console.log(error);
        res.send();
    })
})


module.exports = app;