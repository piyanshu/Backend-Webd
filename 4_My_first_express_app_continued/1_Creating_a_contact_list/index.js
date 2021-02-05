// What we want to do in this lecture??
/* We can create a form and user can enter the data into it 
	then data is send to the server and stored in it.
	 When we restart the server all data will be erase.
	We can also delete some contact from contact list
*/
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
// The object we can made here is known as context. passing the context to 'home'
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
app.listen(port, function(err){
    if(err) { console.log('Error in creating a server', err); }
    console.log('Yup! My server is running on port: ', port);
});