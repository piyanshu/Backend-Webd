const express = require('express');
const port = 8000;
const app = express();

// sending some response use get func instead of switch case
app.get('/', function(req, res){
    res.send('<h1>Cool it is running! or is it? </h1>');
});


app.listen(port, function(err){
    if(err) { console.log('Error in creating a server', err); }
    console.log('Yup! My server is running on port: ', port);
});