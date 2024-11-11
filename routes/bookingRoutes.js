const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/bookings', bookingController.createBooking);
router.get('/bookings', bookingController.getAllBookings);
router.post('/is-booking-possible', bookingController.isBookingPossible);

router.get('/bookings/:id', bookingController.getBookingById);
router.put('/bookings/:id', bookingController.updateBooking);
router.delete('/bookings/:id', bookingController.deleteBooking);

router.get('/unavailableSlots', bookingController.getUnavailableSlotsAll)

router.post('/getBookingFromEmailAndNumber', bookingController.getBookingFromEmailAndNumber)

module.exports = router;
