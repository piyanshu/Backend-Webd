const express = require('express');
const port = 8000;

// calling the express as a function
const app = express();
// humare express server create ho chuka hai 
// Now this app has all the functionalities of this library which are needed to run a express server

app.listen(port, function(err){
	if(err) { console.log('Error in creating server', err); }
	console.log('Yup! My server is running on the port: ', port);
});

// Now after running a server we can write localhost: 8000.
// The browser can show ' Cannot GET / '. 
// This means when browser gives the request of '/' it cannot get any response
// When we create our http sever these type of error handling doesnot takes place
// But when we use our express framework these types of errors handled automatically
