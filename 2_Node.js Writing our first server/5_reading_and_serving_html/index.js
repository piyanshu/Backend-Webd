const http = require('http');
const port = 8000;
// This module helps to reading or writing into or from files
const fs = require('fs');
function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type' : 'text/html'});

// To read the file we have to mention the file path
/* Then function is called by default, if we fails in reading the file
	we can receive an error, if not we can receive the data after reading that file
*/   
    fs.readFile('./index.html', function(err, data){
    	if(err){
    		console.log('error', err);
    		return res.end('<h1>Error!</h1>');
    	}
    	return res.end(data);
    });

/* We cannot write the html code here because it is difficult to write here
	so we can make another file and write html code in it and 
	tell the nodejs to read that file 
*/
    // res.end('<h1>Gotcha!</h1>');
}
const server = http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is up and running on port: ', port);
});