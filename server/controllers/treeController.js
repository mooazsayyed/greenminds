// server/controllers/treeController.js
const Tree = require('../models/Tree');

exports.createTree = async (req, res) => {
    try {
        const { count, location, datePlanted } = req.body;
        
        // Check if files are provided, if not set to an empty array
        let photos = [];
        if (req.files && req.files.length > 0) {
            photos = req.files.map(file => file.path); // Get the paths of the uploaded files
        }

        // Create a new Tree document
        const newTree = new Tree({ count, location, photos, datePlanted });
        await newTree.save();

        res.status(201).json(newTree);
    } catch (error) {
        console.error('Error creating tree record:', error);
        res.status(500).json({ message: 'Error creating tree record', error });
    }
};

exports.getTrees = async (req, res) => {
    try {
      const trees = await Tree.find();
      
      // Ensure photo URLs are constructed correctly
      const updatedTrees = trees.map(tree => {
        const updatedPhotos = tree.photos.map(photo => `${req.protocol}://${req.get('host')}/${photo}`);
        return { ...tree._doc, photos: updatedPhotos };
      });
  
      res.status(200).json(updatedTrees);
    } catch (error) {
      console.error('Error retrieving trees:', error);
      res.status(500).json({ message: 'Error retrieving trees', error });
    }
  };
  
  