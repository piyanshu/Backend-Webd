/* Previously we can write a route and a function correspond to it then 
	that function is known as action which is taken for that route 
	The group of actions in one file is known as controller
*/
const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});
