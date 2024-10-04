// server/controllers/treeController.js
const Tree = require('../models/Tree');

exports.createTree = async (req, res) => {
    try {
        const { count, location, photos, datePlanted } = req.body;
        const newTree = new Tree({ count, location, photos, datePlanted });
        await newTree.save();
        res.status(201).json(newTree);
    } catch (error) {
        res.status(500).json({ message: 'Error creating tree record', error });
    }
};

exports.getTrees = async (req, res) => {
    try {
        const trees = await Tree.find();
        res.status(200).json(trees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching trees', error });
    }
};

// Add more functions for updating and deleting trees as needed
