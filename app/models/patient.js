var mongoose = require('mongoose');

module.exports = mongoose.model('Patients', {
	Number: String,
	Name: String,
	Address: String,
	Family: [{
		Relation: String,
		Name: String,
		Phone: String
	}],
	Information: [String],
	Likes: [String],
	Dislikes: [String],
	Image: String,
	Events: [Number]
});
