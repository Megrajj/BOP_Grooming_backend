const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');
const homeData = require('./data/home.json');
const serviceData = require('./data/service.json');
require('dotenv').config();

connectDB();

const app = express();

app.use(cors({
    origin:["https://bop-grooming-frontend.vercel.app"],
    method:["GET", "POST","PUT","DELETE"],
    credentials:true
    
}));
app.use(bodyParser.json());
app.use('/api', bookingRoutes);

app.get('/api/home', (req, res) => {
    res.json(homeData);
});

app.get('/api/service', (req, res) => {
    res.json(serviceData);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
