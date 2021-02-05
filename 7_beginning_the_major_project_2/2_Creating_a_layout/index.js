// For making the layouts for our website we have to use a library - npm install express-ejs-layouts
const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

// We need to tell the app to use the layouts 
/* We have to write it before routes because in routes those views are to be rendered 
so that before we need to be tell, all the views are to be rendered are belong to some sort of a layout
*/
app.use(expressLayouts);
app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});