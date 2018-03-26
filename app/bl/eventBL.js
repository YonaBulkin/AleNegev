var Event = require('./models/event');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

function getEventsOfPatient(req, res) {
	
	Event.find({
			PatientNumber: req.body.PatientNumber
			
        }, function (err, events) {
            if (err)
                res.send(err);

            res.json(events);
        });
};

function getEventsOfTherapist(req, res) {
	
	Event.find({
			TherapistNumber: req.body.TherapistNumber
			
        }, function (err, events) {
            if (err)
                res.send(err);

            res.json(events);
        });
};

function addEventToPatient(req, res) {
	
};

function addEventToTherapist(req, res) {
	
};

function deleteEvent(req, res) {
	
};

