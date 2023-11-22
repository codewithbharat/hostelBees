
const jwt = require('jsonwebtoken');

// Configuring Enviroment variables
require('dotenv').config();

const secretKey = process.env.JWT_KEY;

// Middleware function to authenticate users
const authenticateUser = (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
    const userType = req.headers.usertype;

    // Check if token is missing
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }

    // Verify the token
    jwt.verify(token, secretKey, (err, decoded) => {
        // Check if the token is invalid
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        // Attach the decoded user information to the request object
        req.user = decoded.user;
        req.user.userType = userType
        // Continue to the next middleware or route handler
        next();
    });
};

// Middleware function to check user type
const checkUserType = (requiredUserType) => (req, res, next) => {
    // Check if the user has the required user type
    if (req.user.userType === requiredUserType) {
        // User has the required user type, continue to the next middleware or route handler
        next();
    } else {
        // User does not have the required user type, return an error
        return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }
};

module.exports = { authenticateUser, checkUserType };
