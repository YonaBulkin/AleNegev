var mongoose = require('mongoose');

module.exports = mongoose.model('Therapists', {
	Number: String,
	Name: String,
	Patients: [String],
	Events: [Number]
});



