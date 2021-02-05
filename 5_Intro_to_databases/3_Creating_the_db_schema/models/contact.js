// What fields would be there in one document is known as schema
// A document needs a schema which would be define in mongoose and mongoose populate the collection using schema
// define a schema and using that schema we will be accessing our database and sending things to it
// schema is written for mongoose to access the database and populate it
// mongoose can be used to create the schema
// If mongoose can be required more than one time in diff files it can be created only once and using the same instance

const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	phone: {
// Now this is the point where we can put validations like number not greater than 10 digits
		type: String,
		required: true
	}
});

/* We have to tell the name of the collection using this schema.
 The name of the collection is used by schema */
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;