const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT;

const mongoose = require('./utils/db');


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
