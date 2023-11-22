//Importing ExpressJS
const express = require('express');
const app = express();

//importing CORS
var cors = require('cors');
app.use(cors());

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

//Allow all requests from all domains & localhost
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

//Import all Routes
const institute = require('./src/route/Institute');
const warden = require('./src/route/Warden');
const student = require('./src/route/Student');
const contact = require('./src/route/ContactForm');
const auth = require('./src/route/authRoute');

app.use('/api/v1', institute);
app.use('/api/v1/', contact);
app.use('/api/v1', warden);
app.use('/api/v1', student);
app.use('/api/v1', auth);

// Welcome Route
app.get('/', (req, res) => {
    res.render('Home');
});

// Start the server
app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}\nVisit : http://localhost:${port}/`);
});
