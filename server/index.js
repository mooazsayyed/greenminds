const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const treeRoutes = require('./routes/treeRoutes');
const { verifyUser } = require('./controllers/userController');
const path = require('path'); // Import the path module
const Deforestation = require('./models/Deforestation');
const deforestationRoutes = require('./routes/deforestationRoutes');

const app = express();

// Load environment variables
dotenv.config();

// MongoDB connection setup
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB_NAME;

if (!mongoUsername || !mongoPassword || !dbName) {
    console.error('Missing MongoDB connection environment variables');
    process.exit(1);
}

const mongoUri = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.umozx.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
        process.exit(1);
    });

// Middleware setup
app.use(cors({
    origin: 'http://localhost:3000', // Use environment variable for trusted domains in production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/users', userRoutes);
app.use('/api/trees', treeRoutes);  // Changed to `/trees` for clarity
app.use('/api/deforestations', deforestationRoutes);
// Dashboard routes
app.get('/dashboard', verifyUser, (req, res) => {
    res.send('Welcome to the dashboard!');
});

app.get('/maindashboard', async (req, res) => {
    try {
        res.send('Welcome to Green!');
    } catch (error) {
        console.error('Error fetching tree data:', error);
        res.status(500).send('Error fetching tree data');
    }
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
