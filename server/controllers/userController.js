const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Middleware to verify user role (admin)
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;  // Get the token from cookies
    if (!token) {
        return res.status(401).json("Token is missing");  // Unauthorized
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
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
        console.log("Attempting login for:", email); // Debugging line
        const user = await User.findOne({ email: email });
        console.log("User found:", user); // Debugging line
        
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            console.log("Password match:", isMatch); // Debugging line
            
            if (isMatch) {
                const token = jwt.sign(
                    { email: user.email, role: user.role },
                    "jwt-secret-key",
                    { expiresIn: '1d' }
                );
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 24 * 60 * 60 * 1000 // 1 day
                });
                return res.json({ Status: "Success", role: user.role });
            } else {
                return res.status(401).json("The password is incorrect");
            }
        } else {
            return res.status(404).json("No record existed");
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Create User
exports.createUser = async (req, res) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);  // Created
    } catch (err) {
        res.status(400).json({ message: err.message });  // Bad request
    }
};

exports.verifyUser = verifyUser;
