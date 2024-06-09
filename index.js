var http = require('http');
const url = require('node:url');    
var fs = require('fs');

http.createServer(function (req, res) {
    let myURL = url.parse(req.url, true);
    let myPath = myURL.path;
    let loc;
    switch(myPath) {
        case '/':
            loc = './index.html';
            break;
        case '/about':
            loc = './about.html';
            break;
        case '/contact':
            loc = './contact-me.html';
            break;
        default:
            loc = './404.html';
            break;
    }
    fs.readFile(loc, function(err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
    return res.end();
   
  });
}).listen(8081);