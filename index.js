const http = require('http');

http.createServer((req, res) => {
    res.write('Hi!');
    res.end();
}).listen(7878);

console.log('Node.js server running on port 7878');
