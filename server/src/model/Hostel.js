const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    warden: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warden', // Referencing the Warden model
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student', // Referencing the Student model
        },
    ],
});

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = Hostel;
