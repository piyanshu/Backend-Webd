const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');

// Using this contact we can populate our collection
const contact = require('./models/contact');

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
    // console.log(__dirname);
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
    contactList.push(req.body);
    return res.redirect('back');
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