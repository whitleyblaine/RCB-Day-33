var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  if (req.url === '/') {
    fs.readFile('index.html', function(err, data) {
      // Tell the browser the string called "data" is HTML, because it wouldn't inherently know. It just imports a STRING, the data from your file
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Return the data, formatting as HTML
      res.end(data);
    })
  }
  else if (req.url === '/movies') {
    fs.readFile('movies.html', function(err, data) {
      // Tell the browser the string called "data" is HTML, because it wouldn't inherently know. It just imports a STRING, the data from your file
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Return the data, formatting as HTML
      res.end(data);
    })
  }
  else if (req.url === '/foods') {
    fs.readFile('foods.html', function(err, data) {
      // Tell the browser the string called "data" is HTML, because it wouldn't inherently know. It just imports a STRING, the data from your file
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Return the data, formatting as HTML
      res.end(data);
    })
  }
  else if (req.url === '/frameworks') {
    fs.readFile('frameworks.html', function(err, data) {
      // Tell the browser the string called "data" is HTML, because it wouldn't inherently know. It just imports a STRING, the data from your file
      res.writeHead(200, {'Content-Type': 'text/html'});
      // Return the data, formatting as HTML
      res.end(data);
    })
  }
  else {
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