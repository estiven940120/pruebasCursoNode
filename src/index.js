var http = require("http");
var log  = require("./modules/log");
var consts = require("./utils/cons");
var firebase = require("../libs")

var server = http.createServer(function(request, response){ 
    if(request.url === "/"){
        response.writeHead(200, {"Content-Tipe": "text/html"});
        response.write("<html><body>Home Page</body></html>");
        response.end();
    }else if(request.url === "/exit"){
        response.writeHead(200, {"Content-Tipe": "text/html"});
        response.write("<html><body>BYE</body></html>");
        response.end();
    }else {
        response.writeHead(404, {"Content-Tipe": "text/html"});
        response.write("<html><body>NOT FOUND</body></html>");
        response.end();
    }

});

server.listen(4000);

console.log("Running on 4000")