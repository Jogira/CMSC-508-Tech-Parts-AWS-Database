const express = require('express');
const path = require('path');
const app = express();
const server = require('./server')
const cors = require('cors');
const mysql = require('mysql')
const bodyParser = require('body-parser')


const db = mysql.createPool({
    host: "database508.cdhunuqsahtr.us-east-1.rds.amazonaws.com",
    user: "amd",
    password: "poyopoyo7",
    database: "CMSC508_Project"
  });


app.use(express.static(path.join(__dirname, './client/build')))
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + './client/build/index.html')
})

app.post("/update", (req, res)=> {

    //Item data
    const itemID = req.body.itemID;
    const itemName = req.body.itemName;
    const category = req.body.category;
    const manufacturer = req.body.manufacturer;
    const series = req.body.series;
    const releaseDate = req.body.releaseDate;
    const modelNumber = req.body.modelNumber;
  
    //Item stock
    const warehouseID = req.body.warehouseID;
    const count = req.body.count;
    const currentPrice = req.body.currentPrice;
    const historicalLow = req.body.historicalLow;
    const historicalHigh = req.body.historicalHigh;
    const saleStatus = req.body.saleStatus;
    const shippingPrice = req.body.shippingPrice;
  
  
    const sqlInsert = "INSERT INTO item (itemID, itemName, category, manufacturer, series, releaseDate, modelNumber) VALUES (?,?,?,?,?,?,?)"
    db.query(sqlInsert, [itemID, itemName, category, manufacturer, series, releaseDate, modelNumber], (err, result) => {
        console.log(err)
    });
  
    const sqlInsertStock = "INSERT INTO stock (itemID, warehouseID, count, currentPrice, historicalLow, historicalHigh, saleStatus, shippingPrice) VALUES (?,?,?,?,?,?,?,?)"
    db.query(sqlInsertStock, [itemID, warehouseID, count, currentPrice, historicalLow, historicalHigh, saleStatus, shippingPrice], (err, result) => {
        console.log(err)
    });
  });

  app.post("/delete", (req, res)=> {

    //Item data
    const itemID = req.body.itemToDelete;
  
  
    const sqlDelete1 = "DELETE FROM stock WHERE itemID = (?)"
    db.query(sqlDelete1, [itemID], (err, result) => {
        console.log(err)
    });

    const sqlDelete2 = "DELETE FROM stock WHERE itemID = (?)"
    db.query(sqlDelete2, [itemID], (err, result) => {
        console.log(err)
    });

    const sqlDelete3 = "DELETE FROM item WHERE itemID = (?)"
    db.query(sqlDelete3, [itemID], (err, result) => {
        console.log(err)
    });

    const sqlDelete4 = "DELETE FROM item WHERE itemID = (?)"
    db.query(sqlDelete4, [itemID], (err, result) => {
        console.log(err)
    });
  });

//   app.post("/delete", (req, res)=> {

//     //Item data
//     const itemID = req.body.itemToDelete;

//     const sqlDelete1 = "DELETE FROM stock (itemID) WHERE itemID = (?)"
//     db.query(sqlDelete1, [itemID], (err, result) => {
//         console.log(err)
//     });

//     const sqlDelete2 = "DELETE FROM item (itemID) WHERE itemID = (?)"
//     db.query(sqlDelete2, [itemID], (err, result) => {
//         console.log(err)
//     });
  
//   });



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

/* app.get('/update', async function (req, res) {

    menu_data = await server.loadMenus();

    var category_list = [];
    for (type of menu_data[2]) {
        category_list.push(type.category);
    }

    res.render('update', { title: 'Update DB', message: 'This aint finished yet', categories: category_list })
})
 */




app.get('/test', async function (req, res) { //sends fields for vendors, manu + category from db to app
    result = await server.loadMenus(); 

    a = {
        company: result[0],
        manu: result[1],
        items: result[2]
    }

    res.send(a); //sends data as obj
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

    res.send(results) ;
    
}); 

app.post('/search/CPU', async function (req, res) {
    
    var search_query, selected_vendor, selected_manufacturer, selected_type, attributes = {}; 
    search_query = req.body.searchTerm ; 
    selected_vendor = req.body.vendor ;
    selected_manufacturer = req.body.manu ; 
    selected_type = req.body.item; 

    const atr = req.body.atr;

    console.log(atr)

    /**
     * 
     * atr is the object from the request,
     * the column names and types need to be mapped into the correct form
     * 
     * attributes is the correct object and form
     */
    if(atr && atr.wattage) {
        attributes.wattage = parseInt(atr.wattage)
    }

    if(atr && atr.graphics) {
        attributes.integratedGraphics = parseInt(atr.graphics)
    }

    if(atr && atr.chipset) {
        attributes.chipset = atr.chipset 
    }

    console.log("attributes in index:"); 
    console.log(attributes);

    /**
     * 
     * build where statement from sent options
     * 
     * returns empty string if there should be no where statement
     */
    where_suffix = buildWhere(attributes) 
    console.log(buildWhere(attributes));

    if(where_suffix !== ''){
        where_suffix = "AND item.itemID = CPU.itemID AND " + where_suffix ;
    } else {
        where_suffix = "AND item.itemID = CPU.itemID"
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

    results = await server.advSearch(search_query, selected_vendor, selected_manufacturer, selected_type, where_suffix);
    //console.log("adv results: ")
    //console.log(results)

    res.send(await server.formatResults(results));

})

app.post('/search/Storage', async function (req, res) {
    
    console.log(req.body);

    var search_query, selected_vendor, selected_manufacturer, selected_type, attributes = {}; 
    search_query = req.body.searchTerm ; 
    selected_vendor = req.body.vendor ;
    selected_manufacturer = req.body.manu ; 
    selected_type = req.body.item; 

    const atr = req.body.atr;

    /**
     * 
     * atr is the object from the request,
     * the column names and types need to be mapped into the correct form
     * 
     * attributes is the correct object and form
     */
    if(atr && atr.capacity) {
        attributes.capacity = parseInt(atr.capacity)
    }

    if(atr && atr.storageType) {
        attributes.storageType = atr.storageType ; 
    }

    if(atr && atr.storageStandard) {
        attributes.storageStandard = atr.storageStandard ;  
    }

    if(atr && atr && atr.formFactor) {
        attributes.formFactor = atr.formFactor ;  
    }

    if(atr && atr.wattage) {
        attributes.wattage = parseInt(wattage);
    }

    console.log("attributes in index:"); 
    console.log(attributes);

    /**
     * 
     * build where statement from sent options
     * 
     * returns empty string if there should be no where statement
     */
    where_suffix = buildWhere(attributes)
    console.log(buildWhere(attributes));

    if(where_suffix !== ''){
        where_suffix = "AND item.itemID = storage.itemID AND " + where_suffix ;
    } else {
        where_suffix = "AND item.itemID = storage.itemID"
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

    results = await server.advSearch(search_query, selected_vendor, selected_manufacturer, selected_type, where_suffix);
    //console.log("adv results: ")
    //console.log(results)

    res.send(await server.formatResults(results));

})

app.post('/search/Motherboard', async function (req, res) {
    
    console.log(req.body);

    var search_query, selected_vendor, selected_manufacturer, selected_type, attributes = {}; 
    search_query = req.body.searchTerm ; 
    selected_vendor = req.body.vendor ;
    selected_manufacturer = req.body.manu ; 
    selected_type = req.body.item; 

    const atr = req.body.atr;

    /**
     * 
     * atr is the object from the request,
     * the column names and types need to be mapped into the correct form
     * 
     * attributes is the correct object and form
     */
    if(atr && atr.chipset) {
        attributes.chipset = atr.chipset 
    }
    if(atr && atr.numUSBports) {
        attributes.numUSBports = parseInt(atr.numUSBports)
    }
    if(atr && atr.network) {
        attributes.network = parseInt(atr.network)
    }
    if(atr && atr.formFactor) {
        attributes.formFactor = atr.formFactor
    }


    console.log("attributes in index:"); 
    console.log(attributes);

    /**
     * 
     * build where statement from sent options
     * 
     * returns empty string if there should be no where statement
     */
    where_suffix = buildWhere(attributes)
    console.log(buildWhere(attributes));

    if(where_suffix !== ''){
        where_suffix = "AND item.itemID = motherboard.itemID AND " + where_suffix ;
    } else {
        where_suffix = "AND item.itemID = motherboard.itemID"
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

    results = await server.advSearch(search_query, selected_vendor, selected_manufacturer, selected_type, where_suffix);
    //console.log("adv results: ")
    //console.log(results)

    res.send(await server.formatResults(results));

})

app.post('/search/Memory', async function (req, res) {
    
    console.log(req.body);

    var search_query, selected_vendor, selected_manufacturer, selected_type, attributes = {}; 
    search_query = req.body.searchTerm ; 
    selected_vendor = req.body.vendor ;
    selected_manufacturer = req.body.manu ; 
    selected_type = req.body.item; 

    const atr = req.body.atr;

    /**
     * 
     * atr is the object from the request,
     * the column names and types need to be mapped into the correct form
     * 
     * attributes is the correct object and form
     */
    if(atr && atr.memoryCapacity) {
        attributes.memoryCapacity = parseInt(atr.memoryCapacity)
    }

    console.log("attributes in index:"); 
    console.log(attributes);

    /**
     * 
     * build where statement from sent options
     * 
     * returns empty string if there should be no where statement
     */
    where_suffix = buildWhere(attributes) 
    console.log(buildWhere(attributes));

    if(where_suffix !== ''){
        where_suffix = "AND item.itemID = memory.itemID AND " + where_suffix ;
    } else {
        where_suffix = "AND item.itemID = memory.itemID"
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

    results = await server.advSearch(search_query, selected_vendor, selected_manufacturer, selected_type, where_suffix);
    //console.log("adv results: ")
    //console.log(results)

    res.send(await server.formatResults(results));

})

app.post('/search/Monitor', async function (req, res) {
    
    console.log(req.body);

    var search_query, selected_vendor, selected_manufacturer, selected_type, attributes = {}; 
    search_query = req.body.searchTerm ; 
    selected_vendor = req.body.vendor ;
    selected_manufacturer = req.body.manu ; 
    selected_type = req.body.item; 

    const atr = req.body.atr;

    /**
     * 
     * atr is the object from the request,
     * the column names and types need to be mapped into the correct form
     * 
     * attributes is the correct object and form
     */
    if(atr && atr.screenSize) {
        attributes.s = parseInt(atr.screenSize)
    }

    if(atr && atr.resolution) {
        attributes.resolution = atr.resolution 
    }

    if(atr && atr.refreshRate) {
        attributes.refreshRate = parseInt(atr.refreshRate)
    }

    if(atr && atr.type) {
        attributes.type = atr.type
    }

    if(atr && atr.audio) {
        attributes.audio = parseInt(atr.audio)
    }

    if(atr && atr.hdmiPorts) {
        attributes.hdmiPorts = parseInt(atr.hdmiPorts)
    }

    if(atr && atr.displayPorts) {
        attributes.displayPorts = parseInt(atr.displayPorts)
    }

    if(atr && atr.DVIports) {
        attributes.DVIports = parseInt(atr.DVIports)
    }

    console.log("attributes in index:"); 
    console.log(attributes);

    /**
     * 
     * build where statement from sent options
     * 
     * returns empty string if there should be no where statement
     */
    where_suffix = buildWhere(attributes) 
    console.log(buildWhere(attributes));

    if(where_suffix !== ''){
        where_suffix = "AND item.itemID = monitor.itemID AND " + where_suffix ;
    } else {
        where_suffix = "AND item.itemID = monitor.itemID"
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

    results = await server.advSearch(search_query, selected_vendor, selected_manufacturer, selected_type, where_suffix);
    //console.log("adv results: ")
    //console.log(results)

    res.send(await server.formatResults(results));

})

app.post('/search/Keyboard', async function (req, res) {
    
    console.log(req.body);

    var search_query, selected_vendor, selected_manufacturer, selected_type, attributes = {}; 
    search_query = req.body.searchTerm ; 
    selected_vendor = req.body.vendor ;
    selected_manufacturer = req.body.manu ; 
    selected_type = req.body.item; 

    const atr = req.body.atr;

    /**
     * 
     * atr is the object from the request,
     * the column names and types need to be mapped into the correct form
     * 
     * attributes is the correct object and form
     */
    if(atr && atr.numpad) {
        attributes.numpad = parseInt(atr.numpad)
    }
    if(atr && atr.wireless) {
        attributes.wireless = parseInt(atr.wireless)
    }

    if(atr && atr.backlightColor) {
        attributes.backlightColor = atr.backlightColor
    }

    if(atr && atr.color) {
        attributes.color = atr.color
    }

    console.log("attributes in index:"); 
    console.log(attributes);

    /**
     * 
     * build where statement from sent options
     * 
     * returns empty string if there should be no where statement
     */
    where_suffix = buildWhere(attributes) 
    console.log(buildWhere(attributes));

    if(where_suffix !== ''){
        where_suffix = "AND item.itemID = keyboard.itemID AND " + where_suffix ;
    } else {
        where_suffix = "AND item.itemID = keyboard.itemID"
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

    results = await server.advSearch(search_query, selected_vendor, selected_manufacturer, selected_type, where_suffix);
    //console.log("adv results: ")
    //console.log(results)

    res.send(await server.formatResults(results));

})

app.post('/search/Phone', async function (req, res) {
    
    console.log(req.body);

    var search_query, selected_vendor, selected_manufacturer, selected_type, attributes = {}; 
    search_query = req.body.searchTerm ; 
    selected_vendor = req.body.vendor ;
    selected_manufacturer = req.body.manu ; 
    selected_type = req.body.item; 

    const atr = req.body.atr;

    /**
     * 
     * atr is the object from the request,
     * the column names and types need to be mapped into the correct form
     * 
     * attributes is the correct object and form
     */
    if(atr && atr.resolution) {
        attributes.resolution = atr.resolution
    }

    if(atr && atr.screenType) {
        attributes.screenType = atr.screenType
    }

    if(atr && atr.ipRating) {
        attributes.ipRating = parseInt(atr.ipRating)
    }

    if(atr && atr.storage) {
        attributes.storage = parseInt(atr.storage)
    }

    if(atr && atr.RAM) {
        attributes.RAM = parseInt(atr.RAM)
    }

    if(atr && atr.CPU) {
        attributes.CPU = atr.CPU
    }

    if(atr && atr.OS) {
        attributes.OS = atr.OS
    }

    if(atr && atr.carrier) {
        attributes.carrier = atr.carrier
    }

    if(atr && atr.fiveG) {
        attributes.fiveG = parseInt(atr.fiveG)
    }

    if(atr && atr.battery) {
        attributes.battery = parseInt(atr.battery)
    }

    if(atr && atr.size) {
        attributes.size = parseInt(atr.size)
    }

    console.log("attributes in index:"); 
    console.log(attributes);

    /**
     * 
     * build where statement from sent options
     * 
     * returns empty string if there should be no where statement
     */
    where_suffix = buildWhere(attributes) 
    console.log(buildWhere(attributes));

    if(where_suffix !== ''){
        where_suffix = "AND item.itemID = phone.itemID AND " + where_suffix ;
    } else {
        where_suffix = "AND item.itemID = phone.itemID"
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

    results = await server.advSearch(search_query, selected_vendor, selected_manufacturer, selected_type, where_suffix);
    //console.log("adv results: ")
    //console.log(results)

    res.send(await server.formatResults(results));

})

/**
 * 
 * this function is called when it it either
 * just vendor
 * just manu
 * just vendor and manu
 */
app.post('/search', async function(req, res) {
    const vendor = req.body.vendor;
    const manu = req.body.manu;
    const searchTerm = req.body.searchTerm;
    console.log(vendor)

    if(vendor && manu) {
        let result = [];
        var r = await server.advSearch(searchTerm, vendor, manu, '', '');
        res.send(r);
    } else if (vendor) {
        var r = await server.advSearch(searchTerm, vendor, null, '', '');
        res.send(r);
    } else if (manu) {
        var r = await server.advSearch(searchTerm, null, manu, '', '');
        res.send(await server.formatResults(r));
    } else if (searchTerm) {
        var r = await server.coreSearch(searchTerm);
        res.send(r)
    }
})


app.get('/cpus', async function(req, res) {

    const result = {
        chipset: [],
        graphics: [],
        wattage: []
    };

    server.query('SELECT DISTINCT chipset, integratedGraphics, wattage FROM CPU').then(data => {
        //put each attribute of the returned rows into their own tables 
        data.map(x => { 
            result.chipset.push(x.chipset);
            result.graphics.push(x.integratedGraphics);
            result.wattage.push(x.wattage);
        })

        //sort 
        result.chipset = [...new Set(result.chipset)]; 
        result.graphics = [...new Set(result.graphics)]; 
        result.wattage = [...new Set(result.wattage)]; 

        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send();
    })
})


app.get('/storage', async function(req, res) {

    const result = {
        capacity: [],
        storageType: [],
        storageStandard: [],
        wattage: []
    };

    server.query('SELECT DISTINCT capacity, storageType, storageStandard, wattage FROM storage').then(data => {
        //put each attribute of the returned rows into their own tables 
        data.map(x => { 
            result.capacity.push(x.capacity);
            result.storageType.push(x.storageType);
            result.storageStandard.push(x.storageStandard);
            result.wattage.push(x.wattage);
        })

        //sort 
        result.capacity = [...new Set(result.capacity)]; 
        result.storageType = [...new Set(result.storageType)]; 
        result.storageStandard = [...new Set(result.storageStandard)]; 
        result.wattage = [...new Set(result.wattage)]; 

        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send();
    })
})


app.get('/mobo', async function(req, res) {

    const result = {
        chipset: [],
        numUSBports: [],
        network: [],
        formFactor: []
    };

    server.query('SELECT DISTINCT chipset, numUSBports, network, formFactor FROM motherboard').then(data => {
        //put each attribute of the returned rows into their own tables 
        data.map(x => { 
            result.chipset.push(x.chipset);
            result.numUSBports.push(x.numUSBports);
            result.network.push(x.network);
            result.formFactor.push(x.formFactor);
        })

        //sort 
        result.chipset = [...new Set(result.chipset)]; 
        result.numUSBports = [...new Set(result.numUSBports)]; 
        result.network = [...new Set(result.network)]; 
        result.formFactor = [...new Set(result.formFactor)]; 

        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send();
    })
})


app.get('/memory', async function(req, res) {


    const result = {
        memoryCapacity: []
    };

    server.query('SELECT DISTINCT memoryCapacity FROM memory').then(data => {
        //put each attribute of the returned rows into their own tables 
        data.map(x => { 
            result.memoryCapacity.push(x.memoryCapacity);
        })

        //sort 
        result.memoryCapacity = [...new Set(result.memoryCapacity)]; 

        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send();
    })
})

//SELECT DISTINCT screenSize, resolution, refreshRate, type, audio, hdmiPorts, displayPorts, DVIports FROM monitor
app.get('/monitor', async function(req, res) {

    const result = {
        screenSize: [],
        resolution: [],
        refreshRate: [],
        type: [],
        audio: [],
        hdmiPorts: [],
        displayPorts: [],
        DVIports: []
    };

    server.query('SELECT DISTINCT screenSize, resolution, refreshRate, type, audio, hdmiPorts, displayPorts, DVIports FROM monitor').then(data => {
        //put each attribute of the returned rows into their own tables 
        data.map(x => { 
            result.screenSize.push(x.screenSize);
            result.resolution.push(x.resolution);
            result.refreshRate.push(x.refreshRate);
            result.type.push(x.type);
            result.audio.push(x.audio);
            result.hdmiPorts.push(x.hdmiPorts);
            result.displayPorts.push(x.displayPorts);
            result.DVIports.push(x.DVIports);
        })

        //sort 
        result.screenSize = [...new Set(result.screenSize)]; 
        result.resolution = [...new Set(result.resolution)]; 
        result.refreshRate = [...new Set(result.refreshRate)]; 
        result.type = [...new Set(result.type)]; 
        result.audio = [...new Set(result.audio)]; 
        result.hdmiPorts = [...new Set(result.hdmiPorts)]; 
        result.displayPorts = [...new Set(result.displayPorts)]; 
        result.DVIports = [...new Set(result.DVIports)]; 

        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send();
    })
})

//SELECT DISTINCT color, backlightColor, numpad, wireless FROM keyboard
app.get('/keyboard', async function(req, res) {

    const result = {
        color: [],
        backlightColor: [],
        numpad: [],
        wireless: []
    };

    server.query('SELECT DISTINCT color, backlightColor, numpad, wireless FROM keyboard').then(data => {
        //put each attribute of the returned rows into their own tables 
        data.map(x => { 
            result.color.push(x.color);
            result.backlightColor.push(x.backlightColor);
            result.numpad.push(x.numpad);
            result.wireless.push(x.wireless);
        })

        //sort 
        result.color = [...new Set(result.color)]; 
        result.backlightColor = [...new Set(result.backlightColor)]; 
        result.numpad = [...new Set(result.numpad)]; 
        result.wireless = [...new Set(result.wireless)]; 


        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send();
    })
})

//SELECT DISTINCT resolution, screenType, ipRating, storage, RAM, CPU, OS, carrier, fiveG, battery, size FROM phone
app.get('/phone', async function(req, res) {

    const result = {
        resolution: [],
        screenType: [],
        ipRating: [],
        storage: [],
        RAM: [],
        CPU: [],
        OS: [],
        carrier: [],
        fiveG: [],
        battery: [],
        size: []
    };

    server.query('SELECT DISTINCT resolution, screenType, ipRating, storage, RAM, CPU, OS, carrier, fiveG, battery, size FROM phone').then(data => {
        //put each attribute of the returned rows into their own tables 
        data.map(x => { 
            result.resolution.push(x.resolution);
            result.screenType.push(x.screenType);
            result.ipRating.push(x.ipRating);
            result.storage.push(x.storage);
            result.RAM.push(x.RAM);
            result.CPU.push(x.CPU);
            result.OS.push(x.OS);
            result.carrier.push(x.carrier);
            result.fiveG.push(x.fiveG);
            result.battery.push(x.battery);
            result.size.push(x.size);
        })

        //sort 
        result.resolution = [...new Set(result.resolution)]; 
        result.screenType = [...new Set(result.screenType)]; 
        result.ipRating = [...new Set(result.ipRating)]; 
        result.storage = [...new Set(result.storage)]; 
        result.RAM = [...new Set(result.RAM)]; 
        result.CPU = [...new Set(result.CPU)]; 
        result.OS = [...new Set(result.OS)]; 
        result.carrier = [...new Set(result.carrier)]; 
        result.fiveG = [...new Set(result.fiveG)]; 
        result.battery = [...new Set(result.battery)]; 
        result.size = [...new Set(result.size)]; 


        res.send(result);
    }).catch(error => {
        console.log(error);
        res.send();
    })
})

function buildWhere(obj) { //returns in format ____ and ______ and _______ etc
    const keys = Object.keys(obj);
    let where = '';

    keys.forEach((key, index) => {
        if(obj[key]) {
            if(typeof(obj[key]) === 'string') {
                where += `${key}='${obj[key]}'`
            }else if (typeof(obj[key] === 'number')) {
                where += `${key}=${obj[key]}`
            }

            console.log(obj[key])
            
            if(index != keys.length-1) {
                where += " and "
            }
        }
    })

    if(where.endsWith(" and ")) {
        where = where.substr(0, where.length-5)
    }

    return where;
}

module.exports = app;



