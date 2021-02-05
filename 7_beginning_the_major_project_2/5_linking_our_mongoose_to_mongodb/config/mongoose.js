/* connecting mongoose to our database mongodb. Download package mongoose
	npm install mongoose */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development');
const db = mongoose.connection;
db.on('Error', console.error.bind(console, 'error connecting to mongodb'));
db.once('open', function(){
	console.log('Successfully connected to db');
});