const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    studentID: {
        type: String,
    },
    contact: {
        type: String,
    },
    hostel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hostel', // Referencing the Hostel model
    },
    // Add any additional fields related to students
});

studentSchema.pre('save', function (next) {
    if (this.password) {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }

    next();
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
