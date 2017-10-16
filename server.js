/* eslint-disable */
var http = require("http");

function start(){
    function onRequest(req, res) {
        console.log("Request received");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

module.exports.start = start;