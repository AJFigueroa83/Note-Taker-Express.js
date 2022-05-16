const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// start app and set port
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// API routes
app.use('/api', apiRoutes);

// HTML routes
app.use('/', htmlRoutes);



app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));