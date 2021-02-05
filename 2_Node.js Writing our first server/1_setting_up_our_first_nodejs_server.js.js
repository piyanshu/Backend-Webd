// index represents the entry point into the directory
/* To begin with the project we have to intialise it,
    so we have to run a command inside 2_basichttpserver - npm init - in a terminal */
// After that we have to set some requirements for project
/* Then one file is automatically created name as 'package.json'
  to telling the outer world that these are the configuration of our project*/
// nodejs has some modules which can helps to run different functionalities
// for eg - http module which helps to run a server
/* server a program which helps to look the files into file system 
    whenever the browser request it helps to send the correct files in respond */

// How to require module
const http = require('http');
const port = 8000;

// Now the server is created 
const server = http.createServer();

// Now we can check it is running or not
// server will run on port 8000, if it runs or if it not runs then the function is called by default. If server runs then that variable in the function arguement is empty, if it not runs then we can receive an error. The first arguement is always an error we can receive it in any variable
server.listen(port, function(err){
	if(err){
		console.log('err');
		return;
	}
	console.log('server is up and running on port: ', port);
});
// to host on our current computer we can use localhost : 8000(port that we have set)