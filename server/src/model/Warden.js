const mongoose = require('mongoose');

const wardenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    // Add any additional fields related to wardens
});

const Warden = mongoose.model('Warden', wardenSchema);

module.exports = Warden;
