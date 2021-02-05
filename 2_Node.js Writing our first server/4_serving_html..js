const http = require('http');
const port = 8000;
function requestHandler(req, res){
    console.log(req.url);
// 200 is the response code which means the request is successful
// some browsers cannot be render everything so either you render the text and recognise it
    res.writeHead(200, {content-type : 'text/html'});
    res.end('Gotcha!');
}
const server = http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is up and running on port: ', port);
});

// 404 - Not found
// Any additional information we have to send from server to browser we have to put it in header