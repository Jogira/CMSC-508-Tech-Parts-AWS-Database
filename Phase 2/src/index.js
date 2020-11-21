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


app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/update", (req, res)=> {


  const itemID = req.body.itemID;
  const itemName = req.body.itemName;
  const category = req.body.category;
  const manufacturer = req.body.manufacturer;
  const series = req.body.series;
  const releaseDate = req.body.releaseDate;
  const modelNumber = req.body.modelNumber;


  const sqlInsert = "INSERT INTO item (itemID, itemName, category, manufacturer, series, releaseDate, modelNumber) VALUES (?,?,?,?,?,?,?)"
  db.query(sqlInsert, [itemID, itemName, category, manufacturer, series, releaseDate, modelNumber], (err, result) => {
      console.log(err)
  });
});



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


module.exports = app;