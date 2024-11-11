const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    vehicleType: { type: String, required: true },
    serviceType: { type: String, required: true },
    rego: { type: String, required: true },
    price: { type: Number, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
