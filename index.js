//1. import json server
const jsonServer = require("json-server");

//2.create our own server to run
const server = jsonServer.create();

//3.returns a middleware that parse and generates json file ,there is no gurantee that the data coming is always be json data so this middleware will parse data to json format
const middleware = jsonServer.defaults();

//4.set up path for db.json
const router = jsonServer.router("db.json");

//5.set up port for server
const port = 4000 || process.env.PORT; //for selecting any available port number while hosting a web service

//6.use middleware,router,to your server
server.use(middleware);
server.use(router);

//7.to listen / run to request
server.listen(port, () => {
  console.log("Media player server started at port number " + port);
});
