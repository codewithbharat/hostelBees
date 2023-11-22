// authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Institute = require('../model/Institute');
const Student = require('../model/Student');
const Warden = require('../model/Warden');

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
            { expiresIn: '7d' }
        );

        // Send the token as a response
        res.json({
            token,
            userType: user.constructor.modelName
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller function for user registration
exports.register = async (req, res) => {
    const { email, password, userType } = req.body;

    try {
        // Check if the user already exists with the given email
        const existingUser = await getUserByType(userType).findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Create a new user
        const newUser = await getUserByType(userType)({
            email,
            password,
            // Additional fields for user registration can be added here
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Generate a JWT token for the newly registered user
        const token = jwt.sign(
            { user: { id: savedUser._id, email: savedUser.email } },
            secretKey,
            { expiresIn: '7d' }
        );

        res.status(201).json({ message: `${savedUser.constructor.modelName} registered successfully`, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Helper function to get the mongoose model based on user type
const getUserByType = (userType) => {
    switch (userType) {
        case 'inst':
            return Institute;
        case 'student':
            return Student;
        case 'warden':
            return Warden;
        default:
            throw new Error('Invalid user type');
    }
};
