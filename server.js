const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const port = process.env.port || 5001;

server.use(middleware);
server.use(router);

server.listen(port,function(){
    console.log("json Server listening on port >> " + port);
});
