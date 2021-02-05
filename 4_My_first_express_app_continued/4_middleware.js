// see the middleware in detail from notes
// Middleware is a function which has access to your req and res
// It can preprocess the data present in the req and res
const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

/* middleware can take three variables req, res and next 
obviously we can receive them in any variables */
/* next - It can passes whatever changes we have done and call the next middleware 
 If there is not any middleware it can calls the controller */
 // middleware1
app.use(function(req, res, next){
	console.log('middleware 1 called');
	next();
});
app.use(function(req, res, next){
	console.log('middleware 2 called');
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());

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
app.post('/create-contact', function(req, res){
    contactList.push(req.body);
    return res.redirect('back');
});
app.listen(port, function(err){
    if(err) { console.log('Error in creating a server', err); }
    console.log('Yup! My server is running on port: ', port);
});