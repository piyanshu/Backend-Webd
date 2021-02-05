// routes is the entry point for all the requests from the browser to know which controller or action wolud be taken for which route
// There is something called express.router which is a module which helps to separate the router and controller
const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('/routes'));
app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});