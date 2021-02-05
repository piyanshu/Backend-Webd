// see the parser in detail from notes
const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* use signifies the middleware 
/* We put our parser in the middleware because we want to access the 
    data before middleware*/
app.use(express.urlencoded);

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
/* We have already send the data from browser to server
 and now we have to store this data into server temporarily*/ 
app.post('/create-contact', function(req, res){
    contactList.push({
        name: req.body.name,
        phone: req.body.phone
    });
//  contactList.push(req.body);        (shortcut)  
    return res.redirect('back');
});
app.listen(port, function(err){
    if(err) { console.log('Error in creating a server', err); }
    console.log('Yup! My server is running on port: ', port);
});

/* When i can run my server this file is compiled, 
all its variables are stored in memory including contactList
when i can add a contact from browser then that contact is stored in memory 
in variable contactList and when i kill my server all the files from memory
are removed and variables also. Then we can again restart the server  
this file is again recompiled with old set of three contacts */