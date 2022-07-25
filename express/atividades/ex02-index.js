const express = require("express");
const routes = require("./ex02-routes")

const server = express();

server.use(express.json());
server.use("/users", routes);

server.listen(3000, () => {
   console.log(`Server is running at PORT 3000`);
 });
