const Deforestation = require('../models/Deforestation');

// Controller for creating deforestation data
exports.createDeforestation = async (req, res) => {
    try {
        const { city, location, percentageImpacted } = req.body;

        // Create a new deforestation document
        const newDeforestation = new Deforestation({ city, location, percentageImpacted });
        await newDeforestation.save();

        res.status(201).json(newDeforestation);
    } catch (error) {
        console.error('Error creating deforestation record:', error);
        res.status(500).json({ message: 'Error creating deforestation record', error });
    }
};

// Controller for retrieving deforestation data
exports.getDeforestations = async (req, res) => {
    try {
        const deforestations = await Deforestation.find();
        res.status(200).json(deforestations);
    } catch (error) {
        console.error('Error retrieving deforestation data:', error);
        res.status(500).json({ message: 'Error retrieving deforestation data', error });
    }
};
