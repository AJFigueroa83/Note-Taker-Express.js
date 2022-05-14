const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.json());
app.use(express.urlencoded({extended: ture}));
app.use(express.static(__dirname + '/public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
})