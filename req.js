const http = require('http');
const fs = require('fs')

http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url == '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<title> Home </title>');
        res.write('<h1> Enter details </h1>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" placeholder="enter value"><button type="submit">Submit</button>')
        return res.end();
    }
    if (url == '/message' && method == "POST"){
        fs.writeFileSync('message.txt', 'Dummy file created');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<title> About </title>');
    res.write('<h1> This is my first node response </h1>');
    res.end();
}).listen(8080); 