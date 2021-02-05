// Our express server interacts with the database Mongodb using a layer in between which is mongoose

const mongoose = require('mongoose');

/*
mongodb server running on our system
localhost - signifies running on our system
contacts_list_db - name of the database whatever we want to keep
*/
// mongoose will connect to our database
mongoose.connect('mongodb://localhost/contacts_list_db');

// to check whether our database is connected to mongoose or not
// we can access the connection between database and mongoose
const db = mongoose.connect();

// Error
db.on('error', console.error.bind(console, 'error connect to db'));

// if the connection is successful, this connection is open once to interact with the database
db.once('open', function(){
	console.log('Successfully connected to db');
});

// Include this file when we firing up our server