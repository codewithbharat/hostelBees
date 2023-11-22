const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const wardenSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
    },
    // Add any additional fields related to wardens
});

wardenSchema.pre('save', function (next) {
    if (this.isNew) {
        // Only generate username for new inst
        const emailParts = this.email.split('@');
        this.username = emailParts[0];
    }
    if (this.password) {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }

    next();
})

const Warden = mongoose.model('Warden', wardenSchema);

module.exports = Warden;
