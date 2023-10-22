const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT;

const mongoose = require('./db');

require('dotenv').config();

// It's a test route
app.get('/test', (req, res) => {
    res.send('Hello, Express.js!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
