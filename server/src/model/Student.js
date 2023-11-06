const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    studentID: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    hostel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hostel', // Referencing the Hostel model
    },
    // Add any additional fields related to students
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
