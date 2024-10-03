const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');  // Use cookie-parser to parse cookies
const dotenv = require('dotenv');
const { verifyUser } = require('./controllers/userController');

const app = express();

// Load environment variables from .env file
dotenv.config();

// MongoDB connection variables
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB_NAME;

// Connect to MongoDB
if (!mongoUsername || !mongoPassword || !dbName) {
    console.error('Missing MongoDB connection environment variables');
    process.exit(1);
}

const mongoUri = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.umozx.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
});

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000',  // Allow this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Allow credentials (cookies, authorization headers)
};

// Middleware setup
app.use(cors(corsOptions));
app.use(cookieParser());  // Use cookie-parser middleware
app.use(express.json());  // Middleware to parse JSON bodies

// Set up routes
app.use('/api/users', userRoutes);

router.get('/dashboard', verifyUser, (req, res) => {
    res.send('Welcome to the dashboard!'); // Send welcome message for authorized users
});


// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 3001; // Note: Set to 3001 since the client is on 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
module.exports = router;
