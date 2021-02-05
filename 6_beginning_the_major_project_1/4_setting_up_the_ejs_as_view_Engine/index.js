const express = require('express');
const app = express();
const port = 8000;

// use the express router 
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
// Here its our choice to use path module we can direct mention the path of views folder
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});