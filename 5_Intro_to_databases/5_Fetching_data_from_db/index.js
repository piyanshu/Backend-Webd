// Fetching the data from database and showit on the browser
/* Fetching all the contacts which are created in database and 
	store it into a variable and pass it onto the template or view  */
// Whenever we can change the schema of a document we can store it in the version
/* Whenever we can change the schema we can change the version no. 
	for eg - adding some fields or removing some fields in a schema 
	then at point of time the value of __v is different and denotes that we can change our schema
*/
// __v - It is a versioning key of database schema to get a record of how many times changes have been done

const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const Contact = require('./models/contact');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
    {
		name : 'Piyanshu',
		phone : '1111111111'
	},
	{
		name : 'Tony Stark',
		phone : '847447838'
	},
	{
		name : 'Coding ninjas',
		phone : '938383897'
	}
];
app.get('/', function(req, res){
/* This find function will goes to the database and find all the contacts related to the query we can mention.
 Here we cannot pass any query so it can find all the contacts 
*/ 
	Contact.find({}, function(err, contacts){
		if(err){
			console.log('Error in fetching contacts');
			return;
		};
		return res.render('home', {
			title: "My Contact List",
			contact_list: contacts
		});
	})   
});
app.get('/practice', function(req, res){
    return res.render('playground', {
        title : 'Playground' 
    });
});
app.post('/create-contact', function(req, res){
    // contactList.push(req.body);
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){console.log('Error in creating a contact');
        return;}
        return res.redirect('back');
    });
});
app.get('/delete-contact', function(req, res){
    let phone = req.query.phone;
    let contactindex = contactList.findIndex(contact => contact.phone == phone);
    if(contactindex != -1){
        contactList.splice(contactindex, 1);
    }
    return res.redirect('back');
});
app.listen(port, function(err){
    if(err) { console.log('Error in creating a server', err); }
    console.log('Yup! My server is running on port: ', port);
});