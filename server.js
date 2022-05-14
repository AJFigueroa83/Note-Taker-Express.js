const express = require('express');
const app = express();
const notes = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({extended: ture}));



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})