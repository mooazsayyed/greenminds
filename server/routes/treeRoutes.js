// server/routes/treeRoutes.js
const express = require('express');
const { createTree, getTrees } = require('../controllers/treeController');

const router = express.Router();

router.post('/trees', createTree); // Endpoint to add a tree
router.get('/trees', getTrees);     // Endpoint to get all trees

// Add routes for updating and deleting trees as needed

module.exports = router;
