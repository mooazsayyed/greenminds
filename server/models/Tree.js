// server/models/Tree.js
const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    photos: {
        type: [String], 
        default: [],
    },
    datePlanted: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Tree', treeSchema);
