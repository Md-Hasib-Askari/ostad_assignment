const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("This is Home Page");
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("This is About Page");
        res.end();
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("This is Contact Page");
        res.end();
    } else if (req.url === '/fs-write') {
        fs.writeFile('demo.txt', 'hello world', (err)=>{
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.write("File was not created!");
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File Created Successfully!");
                res.end();
            }
        });
    }
});

server.listen(3000, ()=> {
    console.log("Server is listening on port 3000");
});
