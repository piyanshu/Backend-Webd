const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var contactList = [
    {
		name : 'Piyanshu',
		phone : '1111111111'
	},
	{
		name : 'Tony Stark',
		phone : '8474478389' 
	},
	{
		name : 'coding ninjas',
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
// Data is sending from browser to server and in action we mention the '/create-contact'
// so that data is come to this controller and thats why we can use POST request
app.post('/create-contact', function(req, res){
// redirect - It tells to the browser go to that route
	return res.redirect('/practice');
});
app.listen(port, function(err){
    if(err) { console.log('Error in creating a server', err); }
    console.log('Yup! My server is running on port: ', port);
});