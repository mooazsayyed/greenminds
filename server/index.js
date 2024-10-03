const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// MongoDB connection variables

const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB_NAME;




// Connect to MongoDB

const mongoUri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.umozx.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
