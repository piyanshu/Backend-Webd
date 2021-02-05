// We can deleting a contact using id because id is unique for every contact
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
    // console.log(__dirname);
    Contact.find({}, function(err, contacts){
        if(err){
            console.log('Error in fetching contacts');
            return;
        }
        return res.render('home', { 
            title : 'My Contact List',
            contact_list : contacts
        });
    });
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
    let id = req.query.id;
/* Here there is no second arguement because we are deleting something, 
    we are not creating something which can return from database
*/
    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting a contact');
            return;
        }
    })
    return res.redirect('back');
});
app.listen(port, function(err){
    if(err) { console.log('Error in creating a server', err); }
    console.log('Yup! My server is running on port: ', port);
});

// There are series of operations CRUD performs on database 
// We can perform only three operations create, read and delete