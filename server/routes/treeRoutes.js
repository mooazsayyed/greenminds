// server/routes/treeRoutes.js
const express = require('express');
const multer = require('multer');
const { createTree, getTrees } = require('../controllers/treeController');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory for storing uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Append timestamp to filename
    }
});

const upload = multer({ storage: storage });

// Route for creating trees
router.post('/', upload.array('photos', 5), createTree); // 'photos' is the key in the form-data
router.get('/', getTrees); // Endpoint to get all trees

module.exports = router;
