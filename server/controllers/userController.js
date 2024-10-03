const User = require('../models/User');
const bcrypt = require('bcrypt');
const { response } = require('express');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');

// Middleware to verify user role (admin)
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;  // Get the token from cookies
    if (!token) {
        return res.status(401).json("Token is missing");  // Unauthorized
    } else {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(403).json("Error with token");  // Forbidden
            } else {
                if (decoded.role === "admin") {
                    next();  // Proceed to the next middleware
                } else {
                    return res.status(403).json("Not an admin");  // Forbidden
                }
            }
        });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email: email }); // Using async/await for cleaner code
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password); // Compare passwords
            if (isMatch) {
                const token = jwt.sign(
                    { email: user.email, role: user.role },
                    process.env.JWT_SECRET_KEY, // Use environment variable for secret key
                    { expiresIn: '1d' }
                );

                // Set token in cookie
                res.cookie('token', token, {
                    httpOnly: true, // Mitigates XSS attacks
                    secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
                    maxAge: 24 * 60 * 60 * 1000 // 1 day
                });

                return res.json({ Status: "Success", role: user.role }); // Successful login response
            } else {
                return res.status(401).json("The password is incorrect"); // Incorrect password
            }
        } else {
            return res.status(404).json("No record existed"); // User not found
        }
    } catch (err) {
        return res.status(500).json({ message: err.message }); // Handle errors
    }
};



// Create User
exports.createUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });  // Conflict
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({
            name: name,
            email: email,
            password: hashedPassword,
            role: role || 'user'  // Default role to 'user' if not provided
        });

        const newUser = await user.save();
        return res.status(201).json({ message: "User created successfully", user: newUser });  // Created
    } catch (err) {
        return res.status(500).json({ message: err.message });  // Internal server error
    }
};

exports.verifyUser = verifyUser;
