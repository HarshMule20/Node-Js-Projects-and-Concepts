const fs = require('fs')
const routinghandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url == '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<title> Home </title>');
        res.write('<h1> Enter details </h1>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" placeholder="enter value"><button type="submit">Submit</button>')
        return res.end();
    }
    if (url == '/message' && method == "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        }); 
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<title> About </title>');
    res.write('<h1> This is my first node response </h1>');
    res.end();
};


// Ways for importing the one Js file into the other

module.exports = routinghandler;

// When multiple functions are needed to be export 

// module.exports = {
//     handler : routinghandler,
//     sometext : 'Some hard coded text'
// };

