const mongoose = require('mongoose');
require('dotenv').config();

// It's a good practice to log the JWT_SECRET_KEY to ensure it's properly set, but do NOT do this in production.
const jwtSecretKey = process.env.JWT_SECRET_KEY;
if (!jwtSecretKey) {
    console.error('JWT_SECRET_KEY is not defined in the environment variables');
    process.exit(1); // Exit if the JWT secret key is not set
}

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;