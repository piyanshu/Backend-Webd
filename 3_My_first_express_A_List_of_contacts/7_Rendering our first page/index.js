const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
// sending some data from controller to view to make our page dynamic 
// To send data we have to make an object, set a variable and assign some value
    return res.render('home', { title : 'My Contact List' });
});

app.listen(port, function(err){
    if(err) { console.log('Error in creating a server', err); }
    console.log('Yup! My server is running on port: ', port);
});