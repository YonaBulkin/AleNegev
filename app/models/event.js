var mongoose = require('mongoose');

module.exports = mongoose.model('Events', {
	Number: Number,
	StartDate: Date,
	EndDate: Date,
	TherapistNumber: String,
	PatientNumber: String,
	Description: String
});
