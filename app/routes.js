var Todo = require('./models/todo');

var EventBL = require('./bl/eventBL');
var PatientBL = require('./bl/patientBL');
var TherapistBL = require('./bl/therapistBL');

module.exports = function (app) {
	
	// ---------- api ----------
	
	// ----- Events -----
	
	// Get all of a given patient
    app.post('/api/getEventsOfPatient', function (req, res) {
		
		EventBL.getEventsOfPatient(req, res);
	});
	
	// Get all of a given therapist
	app.post('/api/getEventsOfTherapist', function (req, res) {
		
		EventBL.getEventsOfTherapist(req, res);
	});
	
	// Add event to Patient
	app.post('/api/addEventToPatient', function (req, res) {
		
		EventBL.addEventToPatient(req, res);
	});
	
	// Add event to Therapist
	app.post('/api/addEventToTherapist', function (req, res) {
		
		EventBL.addEventToTherapist(req, res);
	});
	
	// Delete event
	app.post('/api/deleteEvent', function (req, res) {
		
		EventBL.deleteEvent(req, res);
	});
	
	
	// ----- Patients -----
	
	
	
	// ----- Therapists -----
	
	
	
	// ---------- application ----------
	
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
	
};

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
