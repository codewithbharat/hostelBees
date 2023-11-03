const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URL;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB Connection Error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = mongoose;
