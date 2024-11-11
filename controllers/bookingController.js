const Booking = require('../models/Booking');

// Create a new booking
const createBooking = async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const isBookingPossible = async (req, res) => {
    try {
        const { date, time } = req.body;
        const bookings = await Booking.find({ date, time });
        res.status(200).json({ isPossible: bookings.length === 0 });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Get all bookings
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a single booking by ID
const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getBookingFromEmailAndNumber = async (req, res) => {
    try {
        const { email, number } = req.body;
        const booking = await
        Booking.findOne({ email, phoneNumber: number});
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Update a booking by ID
const updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(updatedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a booking by ID
const deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBooking = await Booking.findByIdAndDelete(id);
        if (!deletedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(deletedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getUnavailableSlotsAll = async (req, res) => {
    try {
        const bookings = await Booking.find();
        const unavailableSlots = bookings.map(booking => ({date: booking.date, time: booking.time}));
        
        res.status(200).json(unavailableSlots);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
    isBookingPossible,
    getUnavailableSlotsAll,
    getBookingFromEmailAndNumber
};
