const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get all users
router.post('/login', userController.loginUser);

// Route to create a new user
router.post('/register', userController.createUser);

module.exports = router;
