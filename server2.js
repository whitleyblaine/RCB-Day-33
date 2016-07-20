var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type' : 'text/html'
    });
    res.end('<h1>Welcome to my home page!</h1>');
  }
  else if (req.url === '/about') {
    res.writeHead(200, {
      'Content-Type' : 'text/html'
    });
    res.end('<h1>Welcome to my about page!</h1>');
  }
  else if (req.url === '/contact') {
    res.writeHead(200, {
      'Content-Type' : 'text/html'
    });
    res.end('<h1>Welcome to my contact page!</h1>');
  } else {
    res.writeHead(404, {
      'Content-Type' : 'text/html'
    });
    res.end('<h2>Sorry, page not found.</h2>')
  }
  console.log(req.url);
});

var port = 8000;

server.listen(port, function() {
  console.log("Server listening on: http://localhost:%s", port);
})