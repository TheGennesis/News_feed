const server = require('./lib/configs/app')();
const config = require('./lib/configs/config');

//creo il server
server.create(config);

//avvio il server
server.start();