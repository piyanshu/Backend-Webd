const http = require('http');
const port = 8000;

/* By creating this function it will take the two arguements by default. The first
arguement is request and second is response, we can receive it in any variable */
function requestHandler(req, res){
	console.log(req.url);
// to send some response to the requested url
	res.end('Gotcha!!');
}

//Whenever this server is created and it starts then it can get a hit with this func
const server = http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is up and running on port: ', port);
});

/*
Whenever we can change the code we have to restart the server 
because when server is running it takes that part into consideration
*/
// To kill the server use ctrl + c

