// npm is install with nodejs. All the packages used by the nodejs are present in npm
// To download the ejs, run a command - npm install ejs
// All the packages can be defined in package.json
// views and templates are same things

const express = require('express');
const path = require('path');	// inbuilt module in nodejs
const port = 8000;
const app = express();

// First we have to tell the express that ejs would be the view engine
// Whenever this app is created, it has multiple properties
/* 
app {
	x : y
}
*/
// so here we created a property view engine and set its value as ejs
app.set('view engine', ejs);

// We have to tell now where we have to place our views
// view is the file which is viewed by the user
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
// This will prints the directory from which this index.js file is started
//	console.log(__dirname);

/* If it is the last statement in the controller and sending some response to 
	the user we need to return it */
   	return res.render('home');
});


app.listen(port, function(err){
    if(err) { console.log('Error in creating a server', err); }
    console.log('Yup! My server is running on port: ', port);
});