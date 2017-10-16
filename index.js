var server = require('./server'); //eslint-disable line
var router = require('./router'); //eslint-disable line

server.start(router.route);