const mongoose = require('mongoose');

const deforestationSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    percentageImpacted: {
        type: Number,
        required: true,
    },
    dateRecorded: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Deforestation', deforestationSchema);
