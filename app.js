// Explicit way of creating a server
// const http = require('http');

// function reqlistener(req, res) {

// }

// http.createServer(reqlistener);

// The second way The anonymous function!

const http = require('http');

// http.createServer(function(req, res){
http.createServer((req, res) => {

    // this is for the demo of dealing with the urls
    const url = req.url;
    if (url == '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<title> Home </title>');
        res.write('<h1> This is my first node response </h1>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" placeholder="enter value"><button type="submit">Submit</button>')
        return res.end();
    }
    console.log(req.url, req.headers, req.method);
    res.setHeader('Content-Type', 'text/html')
    res.write('<title> About </title>');
    res.write('<h1> This is my first node response </h1>');
    res.end();
}).listen(8080); 