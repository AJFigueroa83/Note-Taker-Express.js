const express = require('express');
const app = express();
const notes = require('./db/db.json');
const PORT = 3001;

app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({extended: ture}));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})