const mongoose = require('mongoose');

const institutes = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    univeristy: {
        type: String,
    },
    category: {
        type: String,
        enum: ['tech', 'non-tech'],
        required: true
    },
    address: {
        type: String,
        required: true
    },

    web: {
        type: String
    }

});

const Institutes = mongoose.model('Institutes', institutes);

module.exports = Institutes;