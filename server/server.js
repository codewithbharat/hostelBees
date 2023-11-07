//Importing ExpressJS
const express = require('express');
const app = express();

// Configuring Enviroment variables
require('dotenv').config();

//Importing PORT from enviroment variable
const port = process.env.PORT;

// View engine setup
app.set('views', './src/view');
app.set('view engine', 'ejs');

// Importing Mongodb Connection
const mongoose = require('./utils/db');

// parsing incoming json data
app.use(express.json());


//Import all Routes
const institute = require('./src/route/Institute');


app.use('/api/v1', institute);

// Welcome Route
app.get('/', (req, res) => {
    res.render('home');
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}\nVisit : http://localhost:${port}/`);
});
