const jsonServer = require("json-server");

const port = process.env.PORT || 3001;
const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.use(jsonServer.defaults());
server.use(router);

server.listen(port, "0.0.0.0", () => {
  console.log(`JSON Server is running on port ${port}`);
});
