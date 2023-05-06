const http = require('http');
const fs = require('fs');

// const server = http.createServer((request, response) => {
//   response.end('Hello World');
// });

const posts = [
  { id: 1, title: 'Post One', body: 'This is post 1' },
  { id: 2, title: 'Post Two', body: 'This is post 2' },
];

const server = http.createServer((request, response) => {
  const url = request.url; // RSH request object has a url property on it
  console.log(request.url);
  // response.end('Hello RSH 1');

  if (url === '/') {
    fs.readFile('index.html', (error, file) => {
      if (error) {
        response.writeHead(500, { 'content-type': 'text/html' });
        response.end('<h1>Sorry, we have a problem</h1>');
      } else {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(file);
      }
    });
  } else if (url === '/api/posts') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ success: true, data: posts }));
  } else {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>Page Not Found</h1>');
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
// Initially I used port 500 as recommended by Brad.
//  I got the following error: Error: listen EADDRINUSE: address already in use :::5000
// I switched to port 5001 and got away with it, at least initially
// Then I ascertained that Macs  use port 5000 for the Airplay Receiver
// function. When I turned it off port 5000 became freemem.
