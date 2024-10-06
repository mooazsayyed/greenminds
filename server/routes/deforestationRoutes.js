const express = require('express');
const { createDeforestation, getDeforestations } = require('../controllers/deforestationController');

const router = express.Router();

// Route for creating deforestation data
router.post('/deforest-input', createDeforestation);

// Route for retrieving deforestation data
router.get('/deforests', getDeforestations);

module.exports = router;
