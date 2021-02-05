// We can setup the connection to the database
// We can setup how the schema of one document looks like 

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
    return res.render('home', { 
        title : 'My Contact List',
        contact_list : contactList
    });
});
app.get('/practice', function(req, res){
    return res.render('playground', {
        title : 'Playground' 
    });
});
app.post('/create-contact', function(req, res){
// Now we dont have to push this contact into our variable contactList.
// Now we can push this directly into database
    // contactList.push(req.body);

/* Now whenever we have created something there is a call back which gives whether 
	the error is there or it has been created */
    Contact.create({
// The fields name are same as in schema
    	name: req.body.name,
    	phone: req.body.phone
    }, function(err, newContact){
    	if(err){console.log('Error in creating contact');
    	 return};
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