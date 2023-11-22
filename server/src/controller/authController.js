// authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Institute = require('../models/Institute');
const Student = require('../models/Student');
const Warden = require('../models/Warden');

const secretKey = process.env.JWT_KEY;

// Controller function for user login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Search for the user in Institute schema
        let user = await Institute.findOne({ email });

        // If not found in Institute, search in Student schema
        if (!user) {
            user = await Student.findOne({ email });
        }

        // If still not found, search in Warden schema
        if (!user) {
            user = await Warden.findOne({ email });
        }

        // If no user found, return an error
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { user: { id: user._id, email: user.email } },
            secretKey,
            { expiresIn: '1h' }
        );

        // Send the token as a response
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
