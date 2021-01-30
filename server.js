const jsonserver = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('db.json');
const middle = jsonserver.defaults();
const port = process.env.PORT || 3000;

server.use(middle);
server.use(router);

server.listen(port);
