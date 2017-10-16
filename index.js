var server = require('./server'); //eslint-disable line
var router = require('./router'); //eslint-disable line
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers;

server.start(router.route, handle);