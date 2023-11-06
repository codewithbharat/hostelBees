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
        default: 'tech'
    },
    address: {
        type: String,
    },

    web: {
        type: String
    },

    hostels: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hostel', // Referencing the Hostel model
        },
    ]

});

const Institutes = mongoose.model('Institutes', institutes);

module.exports = Institutes;