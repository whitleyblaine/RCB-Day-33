var http = require('http');

function handleRequest(request, response) {
  response.end('It works!! Path hit: ' + request.url);
  console.log(request.url);
}

// Create a server
var server = http.createServer(handleRequest);


// Lets start our server, first arg is port (little entry way for people)
server.listen(8080, function() {
  // Callback is triggered when server is successfully listening, Hurry!
  console.log("Server listening on: http://localhost:%s", 8080);
});