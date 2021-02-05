// Now we are going to delete a contact from our contact list
// so we have to use get method because we are not going into AJAX

const express = require('express');
const path = require('path');
const port = 8000;
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
    contactList.push(req.body);
    return res.redirect('back');
});
// 1. params
// We can receive that phone in phone and that phone will assign as a key in req.params
// app.get('/delete-contact/:phone', function(req, res){
//     console.log(req.params.phone);
// });

// 2.query params
// All the keys are present in req.query
// app.get('/delete-contact', function(req, res){
//     console.log(req.query);
// });

app.listen(port, function(err){
    if(err) { console.log('Error in creating a server', err); }
    console.log('Yup! My server is running on port: ', port);
});

