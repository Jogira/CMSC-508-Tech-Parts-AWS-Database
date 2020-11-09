//run using cmd node server js
//runs on localhost:3030

const app = require('./index');
const port = 3030;

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});