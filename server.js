const http = require('http');

const server = http.createServer(function(req, res) {
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<html><body><p>This is the Home Page.<p><body><html>');
        res.end();
    } else if(req.url == '/student') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<html><body><p>This is the Student Page.<p><body><html>');
        res.end();
    } else {
        res.end('Invalid Request!');
    }
});

server.listen(5000);

console.log('The Node.js server is running on port 5000...');

// const http = require('http');
// const port = 3000;

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.write('How are things going on the client side?');
//     res.end();
// })
// .listen(port);


