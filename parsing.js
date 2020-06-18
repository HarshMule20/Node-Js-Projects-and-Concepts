const http = require('http');
const routing = require('./routing');
const fs = require('fs');
http.createServer(routing).listen(8080);