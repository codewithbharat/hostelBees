const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const instituteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    password: {
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


// pre 

instituteSchema.pre('save', function (next) {
    if (this.password) {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }

    next();
})

const Institutes = mongoose.model('Institutes', instituteSchema);



module.exports = Institutes;